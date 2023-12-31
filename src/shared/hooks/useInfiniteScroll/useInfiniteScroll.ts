import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
  const { callback, triggerRef, wrapperRef } = props;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
