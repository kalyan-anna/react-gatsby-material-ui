import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current();
      }
    }

    const interval = setInterval(tick, delay);
    return () => clearInterval(interval);
  }, [delay]);
}
export { useInterval };
