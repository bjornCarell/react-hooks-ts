import { useCallback, useReducer } from 'react';
import { useSafeDispatch } from '../useSafeDispatch/useSafeDispatch';
import { Reducer } from '../../types/useReducer/Reducer';
import { Status } from '../../types/useReducer/Status';
import { State } from '../../types/useReducer/State';
import { Action } from '../../types/useReducer/Action';

type AsyncHook<T> = {
  data: T | null;
  status: string;
  error: { message: string } | null;
  run: (promise: Promise<string | unknown>) => void;
};

export const useAsync = <T>(
  initState: T,
  reducer: Reducer<State<T>, Action>,
): AsyncHook<T> => {
  const [state, notSafeDispatch] = useReducer(reducer, {
    status: Status.IDLE,
    data: null,
    error: null,
    ...initState,
  });

  const dispatch = useSafeDispatch(notSafeDispatch);

  const run = useCallback(
    (promise: Promise<string | unknown>) => {
      dispatch({ type: Status.IDLE });
      promise.then(
        (data) => {
          dispatch({ type: Status.RESOLVED, data });
        },
        (error) => {
          dispatch({ type: Status.REJECTED, error });
        },
      );
    },
    [dispatch],
  );

  return { ...state, run };
};
