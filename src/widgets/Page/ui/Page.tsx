import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { scrollSaveActions } from '../model/slice/scrollSaveSlice';
import { getScrollSavePosition } from '../model/selectors/getScrollSavePosition/getScrollSavePosition';
import cls from './Page.module.scss';

interface PageProps {
  additionalClasses?: string[],
  children: ReactNode,
  onScrollEnd?: () => void,
}

export const Page = (props: PageProps) => {
  const { additionalClasses = [], children, onScrollEnd } = props;

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollPosition = useAppSelector((state) => getScrollSavePosition(state, pathname));

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useDebounce((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      path: pathname,
      position: event.currentTarget?.scrollTop ?? (event.target as HTMLElement).scrollTop,
    }));
  }, 200);

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [...additionalClasses])} onScroll={onScroll}>
      {children}
      {onScrollEnd ? (
        <div className={cls.trigger} ref={triggerRef} />
      ) : null}
    </section>
  );
};