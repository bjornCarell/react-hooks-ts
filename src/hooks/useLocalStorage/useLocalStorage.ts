import { useState, useEffect, useRef } from 'react';

export const useLocalStorage = <T>(
  key: string,
  defaultData: T,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
): [T, (value: T) => void] => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue) {
      return deserialize(storedValue);
    }

    return typeof defaultData === 'function' ? defaultData() : defaultData;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (key !== prevKey) {
      window.localStorage.removeItem(prevKey);
    }

    prevKeyRef.current = key;
    window.localStorage.setItem(prevKey, serialize(value));
  }, [key, serialize, value]);

  return [value, setValue];
};
