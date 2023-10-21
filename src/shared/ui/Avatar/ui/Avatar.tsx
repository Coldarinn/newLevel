import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../AppImage';
import { Skeleton } from '../../Skeleton';
import cls from './Avatar.module.scss';

export interface AvatarProps {
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
    <AppImage
      fallback={<Skeleton width={styles.width} height={styles.height} />}
      src={src}
      alt={alt}
      style={styles}
      additionalClasses={[classNames(cls.Avatar, {}, [...additionalClasses])]}
    />
  );
};
