import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
   additionalClasses?: string[],
   theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    additionalClasses = [], theme = AppLinkTheme.PRIMARY, children, to, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [...additionalClasses, cls[theme]])}
      {...otherProps}
    >
      { children }
    </Link>
  );
};
