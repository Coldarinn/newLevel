import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  additionalClasses?: string[],
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { additionalClasses = [] } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [...additionalClasses])}>
      <Loader />
    </div>
  );
};
