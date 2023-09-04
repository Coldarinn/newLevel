import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';
import { Button } from 'shared/ui/Button';


interface ThemeSwitcherProps {
  additionalClasses?: string[],
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { additionalClasses = [] } = props;
  
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      additionalClasses={[classNames(cls.ThemeSwitcher, {}, [...additionalClasses])]}
      onClick={toggleTheme}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
};
