import { configureStore } from "@reduxjs/toolkit";

import { history } from "routes/history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import createReducer from "./ducks/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: createReducer(history),
  middleware: [routerMiddleware(history), sagaMiddleware],
  devTools: {
    shouldHotReload: true,
  },
});

sagaMiddleware.run(rootSaga);

export default store;
