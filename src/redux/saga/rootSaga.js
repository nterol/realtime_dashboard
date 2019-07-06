import { call } from "redux-saga/effects";

import { startSaga } from "./sseSaga";

export default function* rootSaga() {
  yield call(startSaga);
}
