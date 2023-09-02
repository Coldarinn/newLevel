import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { additionalClasses = [] } = props;
  console.log('additionalClasses: ', additionalClasses);
  console.log('classNames(cls.Navbar, {}, [...additionalClasses]): ', classNames(cls.Navbar, {}, [...additionalClasses]));
  
  return (
    <div className={classNames(cls.Navbar, {}, [...additionalClasses])}>
      <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>Главная</AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
    </div>
  )
};
