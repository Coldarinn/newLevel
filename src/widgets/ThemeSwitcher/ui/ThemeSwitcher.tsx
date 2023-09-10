import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'shared/const/theme';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  additionalClasses?: string[],
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
   const { additionalClasses = [] } = props;

   const { theme, toggleTheme } = useTheme();

   return (
      <Button
         additionalClasses={[classNames('', {}, [...additionalClasses])]}
         onClick={toggleTheme}
      >
         { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
   );
};
