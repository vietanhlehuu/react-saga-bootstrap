import sagaWrapper from "store/helpers/sagaHelpers";
import { counterActions, counterSelectors } from "store/ducks/CounterDuck";
import { put, select } from "redux-saga/effects";

function* increase({ payload, setMetaData }) {
  const state = yield select(counterSelectors.getNumber);
  console.log(state);
  setMetaData("Hello world");
  yield put(counterActions.decrease(5));
}

const counterSagas = [
  sagaWrapper({
    actionType: counterActions.increase,
    worker: increase,
  }),
];

export default counterSagas;
