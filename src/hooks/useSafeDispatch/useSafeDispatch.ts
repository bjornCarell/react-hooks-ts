import { useCallback, useLayoutEffect, useRef } from 'react';
import { Dispatch } from '../../types/useReducer/Dispatch';

export const useSafeDispatch = (dispatch: Dispatch): Dispatch => {
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    (action) => {
      if (mountedRef.current) {
        return dispatch(action);
      }
      return null;
    },
    [dispatch],
  );
};
