import { memo } from 'react';

import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  additionalClasses?: string[],
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { additionalClasses = [] } = props;

  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      additionalClasses={[classNames(cls.button, {}, [...additionalClasses])]}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </Button>
  );
});
