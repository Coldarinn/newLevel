import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
  additionalClasses?: string[],
}

export const Loader: FC<LoaderProps> = (props) => {
  const { additionalClasses = [] } = props;

  return (
    <div className={classNames(cls.Loader, {}, [...additionalClasses])} />
  );
};
