import { Portal } from '@headlessui/react';
import { ReactNode, useCallback, useEffect } from 'react';

import { useModal } from '@/shared/hooks/useModal/useModal';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';

import cls from './Drawer.module.scss';

export interface DrawerProps {
  additionalClasses?: string[];
  children: ReactNode;
  isOpening: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const height = window.innerHeight * 0.8;

const DrawerContent = (props: DrawerProps) => {
  const {
    additionalClasses = [],
    children,
    isOpening,
    onClose,
    lazy = false,
  } = props;

  const { Spring, Gesture } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const open = useCallback(
    ({ canceled }: any) => {
      api.start({
        y: 0,
        immediate: false,
        config: canceled ? Spring.config.wobbly : Spring.config.stiff,
      });
    },
    [Spring.config.stiff, Spring.config.wobbly, api],
  );

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
    });
  };

  const closeHandler = () => {
    close(1);
    onClose();
  };

  const { isOpen, isMounted, onModalClose } = useModal({
    isOpening,
    onClose: closeHandler,
  });

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      offset: [, oy],
      cancel,
      canceled,
    }) => {
      if (oy < -70) cancel();

      if (last) {
        if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
          onModalClose();
        } else {
          open({ canceled });
        }
      } else {
        api.start({ y: oy, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  useEffect(() => {
    if (isOpening) {
      open({});
    }
  }, [isOpening, open]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.overlay, { [cls.isOpen]: isOpen }, [
          ...additionalClasses,
        ])}
        onClick={() => onModalClose()}
        onKeyDown={() => onModalClose()}
      />
      <Spring.a.div
        className={cls.sheet}
        style={{ display, bottom: '0', y }}
        {...bind()}
      >
        {children}
      </Spring.a.div>
    </Portal>
  );
};

export const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
