import React, { Children } from 'react';
import './App.css';
import { HookPresenter } from './components/HookPresenter/HookPresenter';
import { UseLocalStorage } from './components/UseHooks/UseLocalStorage';
import { UseMedia } from './components/UseHooks/UseMedia';
import { UseAsync } from './components/UseHooks/UseAsync';
import {
  UseThisContext,
  CounterProvider,
} from './components/UseHooks/UseThisContext';

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <h3>React Hooks - TS</h3>
        <p>Custom hooks</p>
      </div>
      <div>
        <HookPresenter
          heading="useLocalStorage"
          ComponentWithHook={UseLocalStorage}
        />
        <HookPresenter heading="useMedia" ComponentWithHook={UseMedia} />
        <HookPresenter heading="useAsync" ComponentWithHook={UseAsync} />
        <CounterProvider>
          <HookPresenter
            heading="useThisContext"
            ComponentWithHook={UseThisContext}
          />
        </CounterProvider>
      </div>
    </div>
  );
}

export default App;
