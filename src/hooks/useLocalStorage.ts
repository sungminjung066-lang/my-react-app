import React from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storageValue, setStorageValue] = React.useState<T>(() => {
    const savedName = localStorage.getItem(key);
    return savedName ? JSON.parse(savedName) : initialValue;
  });

  const setValue = React.useCallback(
    (value: T) => {
      setStorageValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  return [storageValue, setValue] as const;
}
