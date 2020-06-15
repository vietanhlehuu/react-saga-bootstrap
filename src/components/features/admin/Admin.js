import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelectors, counterActions } from 'store/ducks/CounterDuck';
import { actionUtils } from 'store/helpers/actionUtils';

const Admin = () => {
  const number = useSelector(counterSelectors.getNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(
            actionUtils.registerCallback(
              actionUtils.registerLoading(counterActions.increase(2)),
            ),
          );
        }}
      >
        +
      </button>
      <button type="button" onClick={null}>
        -
      </button>
    </div>
  );
};

export default Admin;
