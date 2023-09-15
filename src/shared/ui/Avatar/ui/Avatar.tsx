import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  additionalClasses?: string[],
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    additionalClasses = [], src, size, alt,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, {}, [...additionalClasses])} />
  );
};
