import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  additionalClasses?: string[];
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { additionalClasses = [] } = props;

  const { toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      additionalClasses={[classNames(cls.button, {}, [...additionalClasses])]}
      onClick={onToggleHandler}
    >
      <ThemeIcon />
    </Button>
  );
});
