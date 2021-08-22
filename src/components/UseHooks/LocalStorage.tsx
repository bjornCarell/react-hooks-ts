import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage/useLocalStorage';

export const LocalStorage = (): JSX.Element => {
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [error, setError] = useState(false);
  const [storage, setStorage] = useLocalStorage('myStorage', { a: 'b' });

  const handleInput = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (newKey && newValue) {
      // Must use computed value to manipulate object
      setStorage({ ...storage, [newKey]: newValue });
      setError(false);
    }
    if (!newKey || !newValue) setError(true);
  };

  const handleReset = (): void => {
    setNewKey('');
    setNewValue('');
    setStorage({ a: 'b' });
  };

  return (
    <div>
      <h2>Use hooks</h2>
      <div>
        <h4>useLocalStorage</h4>
        <ul>
          {Object.entries(storage).map(([key, value]) => (
            <li key={key}>
              {key} : {value}
            </li>
          ))}
        </ul>
        <form>
          <div>
            <label htmlFor="new-key">
              Input key
              <input
                type="text"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
              />
            </label>
            <small>{error && !newKey ? 'provide a key' : null}</small>
          </div>
          <div>
            <label htmlFor="new-value">
              Input value
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
            </label>
            <small>{error && !newValue ? 'provide a value' : null}</small>
          </div>
          <button type="submit" onClick={handleInput}>
            change storage key
          </button>
          <input type="reset" onClick={handleReset} />
        </form>
      </div>
    </div>
  );
};
