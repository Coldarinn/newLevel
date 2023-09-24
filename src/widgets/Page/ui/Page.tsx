import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  additionalClasses?: string[],
  children: ReactNode,
  onScrollEnd?: () => void,
}

export const Page = (props: PageProps) => {
  const { additionalClasses = [], children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [...additionalClasses])}>
      {children}
      {onScrollEnd ? (
        <div className={cls.trigger} ref={triggerRef} />
      ) : null}
    </section>
  );
};
