import {
  ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
 additionalClasses?: string[];
 fallback?: ReactElement;
 errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    additionalClasses = [], src, alt = 'image', fallback, errorFallback, ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (isError && errorFallback) {
    return errorFallback;
  }

  return (
    <img className={classNames('', {}, [...additionalClasses])} src={src} alt={alt} {...otherProps} />
  );
});
