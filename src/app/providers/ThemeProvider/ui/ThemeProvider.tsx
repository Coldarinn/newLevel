import { ReactNode, useEffect, useMemo, useState } from 'react';

import { getUserAuthData } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';

import { ThemeContext } from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const authData = useAppSelector(getUserAuthData);

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (authData?.jsonSettings?.theme) {
      setTheme(authData?.jsonSettings?.theme);
    }
  }, [authData]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
