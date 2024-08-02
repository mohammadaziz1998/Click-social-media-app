import { useEffect, useState } from 'react';

export function useDelay(delayedValue, delay) {
  const [value, setValue] = useState('');
  useEffect(
    function () {
      const timer = setTimeout(() => setValue(delayedValue), delay);

      return () => clearTimeout(timer);
    },
    [setValue, delay, delayedValue]
  );
  return { value };
}
