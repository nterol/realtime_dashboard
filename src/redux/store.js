import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleWare from "redux-saga";
import rootSaga from "./saga/rootSaga";
import packageReducer from "./reducers/packageReducer";
import serverReducer from "../redux/reducers/serverReducer";

const rootReducer = combineReducers({
  packages: packageReducer,
  server: serverReducer
});

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
