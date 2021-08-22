import React from 'react';
import './App.css';
import { LocalStorage } from './components/UseHooks/LocalStorage';

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <h3>React Hooks - TS</h3>
        <p>Custom hooks</p>
      </div>
      <div>
        <LocalStorage />
      </div>
    </div>
  );
}

export default App;
