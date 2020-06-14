import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { loadingActions } from "store/ducks/LoadingDuck";

function* workerRegistation(worker, action) {
  const meta = {
    data: null,
    err: null,
  };
  const setMetaData = (data) => {
    meta.data = data;
  };
  const setMetaErr = (err) => {
    meta.err = err;
  };
  const isLoading = action.meta.isLoading;
  if (isLoading) {
    yield put(loadingActions.show());
  }
  yield call(worker, {
    payload: action.payload,
    action,
    setMetaData,
    setMetaErr,
  });
  if (isLoading) {
    yield put(loadingActions.hide());
  }
}
export const registerEvery = ({ actionType, worker }) => {
  return function* watcher() {
    yield takeEvery(actionType, workerRegistation, worker);
  };
};

export const registerLatest = ({ actionType, worker }) => {
  return function* watcher() {
    yield takeLatest(actionType, workerRegistation, worker);
  };
};
