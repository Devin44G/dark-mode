import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key);

  useEffect(() => {
    if(value === true) {
      document.querySelector('body').classList.add('dark-mode');
      console.log('I\'m true');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
      console.log('I\'m false');
    }
  }, [value]);

  return [value, setValue];
}
