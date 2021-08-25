import React from 'react';
import { useAsync } from '../../hooks/useAsync/useAsync';
import { Status } from '../../types/useReducer/Status';
import { State } from '../../types/useReducer/State';
import { Action } from '../../types/useReducer/Action';

export function asyncReducer<T>(state: State<T>, action: Action): State<T> {
  switch (action.type) {
    case Status.PENDING: {
      return { status: Status.PENDING, data: null, error: null };
    }
    case Status.RESOLVED: {
      return { status: Status.RESOLVED, data: action.data, error: null };
    }
    case Status.REJECTED: {
      return { status: Status.REJECTED, data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const UseAsync = (): JSX.Element => {
  const { data, status, error, run } = useAsync(
    { status: Status.IDLE },
    asyncReducer,
  );

  console.log('UseAsync', {
    data,
    status,
    error,
    run,
  });

  return <div>{JSON.stringify({ data, status, error })}</div>;
};
