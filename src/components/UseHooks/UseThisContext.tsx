import React, {
  Children,
  createContext,
  ReactChildren,
  useReducer,
} from 'react';
import { useThisContext } from '../../hooks/useThisContext/useThisContext';

type State = { count: number };
type Action = { type: string };
type Count = { count: number };

type CountContextType = [Count, React.Dispatch<Action>];

const CountContext = createContext<CountContextType>([
  { count: 0 },
  () => null,
]);

type CounterProviderProps = {
  children: JSX.Element;
};

export const CounterProvider = (props: CounterProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(
    (inputState: State, action: Action) => {
      switch (action.type) {
        case 'increment': {
          return { ...inputState, count: inputState.count + 1 };
        }
        case 'decrement': {
          return { ...inputState, count: inputState.count - 1 };
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
    },
    { count: 0 },
  );
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CountContext.Provider value={[state, dispatch]} {...props} />;
};

const increment = (dispatch: React.Dispatch<Action>): void =>
  dispatch({ type: 'increment' });

const decrement = (dispatch: React.Dispatch<Action>): void =>
  dispatch({ type: 'decrement' });

export const UseThisContext = (): JSX.Element => {
  const [state, dispatch] = useThisContext(CountContext);

  return (
    <>
      <div>{state.count}</div>
      <button type="button" onClick={() => decrement(dispatch)}>
        -
      </button>
      <button type="button" onClick={() => increment(dispatch)}>
        +
      </button>
    </>
  );
};
