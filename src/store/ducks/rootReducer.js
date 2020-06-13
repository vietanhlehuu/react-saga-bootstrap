import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reduxResources } from "constants/constants";

import { alertReducer } from "./AlertDuck";
import { counterReducer } from "./CounterDuck";

const staticReducer = {
  [reduxResources.ALERT]: alertReducer,
  [reduxResources.COUNTER]: counterReducer,
};

const createReducer = (history, asyncReducers = {}) =>
  combineReducers({
    router: connectRouter(history),
    ...staticReducer,
    ...asyncReducers,
  });

export default createReducer;
