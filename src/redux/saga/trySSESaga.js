import { eventChannel, END } from "redux-saga";
import {
  take,
  put,
  call,
  race,
  delay,
  cancelled,
  fork
} from "redux-saga/effects";

export const startChannel = () => ({ type: "START_CHANNEL" });
export const stopChannel = () => ({ type: "STOP_CHANNEL" });

let eventSrc;

const connect = () => {
  const url = "http://localhost:8080";
  eventSrc = new EventSource(url);
  console.log("connect", eventSrc.readyState);
  return new Promise(resolve => {
    if (eventSrc.readyState === 0) resolve(eventSrc);
  });
};

const disconnect = () => {
  const url = "http://localhost:8080";
  eventSrc = new EventSource(url);
  console.log("disconnec", eventSrc.readyState);
  return new Promise(resolve => {
    if (eventSrc.readyState === 2) resolve(eventSrc);
  });
};

const reconnect = () => {
  const url = "http://localhost:8080";
  eventSrc = new EventSource(url);
  console.log("reconnect", eventSrc.readyState);
  return new Promise(resolve => {
    if (eventSrc.readyState === 0) resolve(eventSrc);
  });
};

function subSSE(eSrc) {
  console.log("SUBSSE", eSrc.readyState);
  const subs = emitter => {
    eSrc.addEventListener("order_event", message => emitter(message.data));
    eSrc.onopen = e => console.log("OPEN", e);
    eSrc.onerror = () => {
      return emitter(END);
    };
    return () => eSrc.close();
  };
  return eventChannel(subs);
}

const listenDisconnectSaga = function*() {
  while (true) {
    yield call(disconnect);
    yield put({ type: "SERVER_OF" });
  }
};

const listenConnectSaga = function*() {
  while (true) {
    yield call(reconnect);
    yield put({ type: "SERVER_ON" });
  }
};

const listenServerSaga = function*() {
  try {
    yield put({ type: "CHANNEL_ON" });
    const { timeout } = yield race({
      connect: call(connect),
      timeout: delay(2000)
    });

    if (timeout) {
      console.log("TIMEOUT");
      yield put({ type: "SERVER_OFF" });
    }

    const srcEvent = yield call(connect);
    const chan = yield call(subSSE, srcEvent);

    // yield fork(listenConnectSaga);
    // yield fork(listenDisconnectSaga);
    yield put({ type: "SERVER_ON" });

    while (true) {
      const payload = yield take(chan);

      yield put({ type: "STATUS_UPDATE", payload });
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
    if (yield cancelled()) {
      yield put({ type: "CHANNEL_OFF" });
      eventSrc.close();
    }
  }
};

export const startAndStop = function*() {
  while (true) {
    yield take("START_CHANNEL");
    yield race({
      getData: call(listenServerSaga),
      cancel: take("STOP_CHANNEL")
    });
  }
};
