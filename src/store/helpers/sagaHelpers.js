import { take, put, call } from "redux-saga/effects";
import { loadingActions } from "store/ducks/LoadingDuck";

const sagaWrapper = ({ actionType, worker }) =>
  function* watcher() {
    while (true) {
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

      const action = yield take(actionType);
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
      console.log(meta);
      if (isLoading) {
        yield put(loadingActions.hide());
      }
    }
  };

export default sagaWrapper;
