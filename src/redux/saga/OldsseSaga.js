import { eventChannel } from "redux-saga";
import { take, put, call, race, delay } from "redux-saga/effects";

export function subSSE(eventSrc) {
  const subs = emitter => {
    eventSrc.addEventListener("order_event", message => {
      emitter(message);
    });

    eventSrc.onerror = () => {
      emitter("END");
    };

    return () => eventSrc.close();
  };

  return eventChannel(subs);
}

const connect = () => {
  const url = "http://localhost:8080";
  const eventSrc = new EventSource(url);
  console.log("connect");
  return new Promise(resolve => {
    eventSrc.addEventListener("order_event", () => {
      resolve(eventSrc);
    });
    eventSrc.close();
  });
};

const disconnect = () => {
  const url = "http://localhost:8080";
  const eventSrc = new EventSource(url);
  return new Promise(resolve => {
    eventSrc.onerror = () => {
      resolve(eventSrc);
    };

    eventSrc.close(); // eventSrc.addEventListener("order_event", () => resolve(eventSrc));
  });
};

const reconnect = () => {
  const url = "http://localhost:8080";
  const eventSrc = new EventSource(url);
  return new Promise(resolve => {
    eventSrc.addEventListener("order_event", () => {
      resolve(eventSrc);
    });
    eventSrc.close();
  });
};

const listenDisconnect = function*() {
  while (true) {
    yield call(disconnect);
  }
};

const listenReconnect = function*() {
  while (true) {
    yield call(reconnect);
  }
};

export function* sseSaga() {
  //   const url = "http://localhost:8080";
  //   const eventSrc = new EventSource(url);
  //   const chan = yield call(subSSE, eventSrc);
  try {
    yield put({ type: "CHANNEL_ON" });
    const { timeout } = yield race({
      connected: call(connect),
      timeout: delay(2000)
    });

    if (timeout) {
      yield put({ type: "SERVER_OFF" });
    }

    const eventSrc = yield call(connect);
    const sseChannel = yield call(subSSE, eventSrc);
    yield call(listenDisconnect);
    yield call(listenReconnect);

    // yield call(connect);
  } catch (e) {
    console.log("ERROR", e);
  }
  //   while (true) {
  //     const message = yield take(chan);
  //     console.log(message.srcElement.readyState);
  //     yield put({ type: "STATUS_UPDATE", payload: message.data });
  //   }
}
