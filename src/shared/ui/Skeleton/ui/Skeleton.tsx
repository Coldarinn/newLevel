import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  additionalClasses?: string[],
  height?: string | number;
  width?: string | number;
  rounded?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    additionalClasses = [], width, height, rounded,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: rounded,
  };

  return (
    <div className={classNames(cls.skeleton, {}, [...additionalClasses])} style={styles} />
  );
};
