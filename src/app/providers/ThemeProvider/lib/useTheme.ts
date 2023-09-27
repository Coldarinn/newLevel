import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage';
import { Theme } from 'shared/const/theme';

import { ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.BLUE;
      break;
    case Theme.BLUE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.DARK;
      break;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
