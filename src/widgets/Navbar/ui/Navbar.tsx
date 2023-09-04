import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { additionalClasses = [] } = props;
  
  return (
    <div className={classNames(cls.Navbar, {}, [...additionalClasses])}>
      <ThemeSwitcher />
      <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>Главная</AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
    </div>
  )
};
