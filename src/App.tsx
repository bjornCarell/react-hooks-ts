import React from 'react';
import './App.css';
import { HookPresenter } from './components/HookPresenter/HookPresenter';
import { UseLocalStorage } from './components/UseHooks/UseLocalStorage';
import { UseMedia } from './components/UseHooks/UseMedia';

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
      </div>
    </div>
  );
}

export default App;
