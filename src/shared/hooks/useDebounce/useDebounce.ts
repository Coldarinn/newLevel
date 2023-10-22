import { useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const throttleRef = useRef<number | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (typeof throttleRef.current === 'number') {
        clearTimeout(throttleRef.current);
      }

      throttleRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
