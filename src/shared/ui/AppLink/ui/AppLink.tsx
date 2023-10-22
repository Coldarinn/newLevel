import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  DEFAULT = 'default',
}

interface AppLinkProps extends LinkProps {
  additionalClasses?: string[];
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    additionalClasses = [],
    theme = AppLinkTheme.DEFAULT,
    children,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [
        ...additionalClasses,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
