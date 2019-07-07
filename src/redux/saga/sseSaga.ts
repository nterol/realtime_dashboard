import { eventChannel, END } from "redux-saga";
import { take, put, call, delay } from "redux-saga/effects";

import serverStatus from "../types/serverStatus";

export function subSSE(eventSrc: EventSource) {
  const subs = (emitter: any) => {
    eventSrc.addEventListener("order_event", (message: any) => {
      emitter(message);
    });

    eventSrc.onerror = e => {
      emitter(END);
    };

    return () => {
      eventSrc.close();
    };
  };
  return eventChannel(subs);
}

export function* sseSaga() {
  const url = "http://localhost:8080";
  const eventSrc = new EventSource(url);
  const chan = yield call(subSSE, eventSrc);
  try {
    while (true) {
      const message = yield take(chan);
      const payload = JSON.parse(message.data);
      const subType = payload.payload.subtype.toUpperCase();
      const flag = payload.payload.short.toUpperCase();
      const type = `${subType}_${flag}`;
      yield put({ type, payload });
      yield put({ type: serverStatus.on });
    }
  } finally {
    eventSrc.close();
    yield delay(2000);
    yield put({ type: serverStatus.off });
  }
}

export function* startSaga() {
  while (true) {
    yield take(serverStatus.launch);
    yield call(sseSaga);
  }
}
