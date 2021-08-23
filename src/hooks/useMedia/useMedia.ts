import { useDebugValue, useEffect, useState } from 'react';

export const useMedia = (query: string, initState = false): boolean => {
  const [state, setState] = useState(initState);

  useDebugValue(`query: ${query}; state: ${state}`);

  useEffect(() => {
    let mounted = false;
    const mql = window.matchMedia(query);

    function onChange(): void {
      if (!mounted) {
        return;
      }
      setState(Boolean(mql.matches));
    }
    mql.addEventListener('onResize', onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener('onResize', onChange);
    };
  }, [query]);

  return state;
};
