import { Portal } from '@headlessui/react';
import { ReactNode } from 'react';

import { useModal } from '@/shared/hooks/useModal/useModal';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Drawer.module.scss';

export interface DrawerProps {
  additionalClasses?: string[],
  children: ReactNode;
  isOpening: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
  const {
    additionalClasses = [], children, isOpening, onClose, lazy = false,
  } = props;

  const {
    isOpen,
    isMounted,
    onModalClose,
    onModalContentClick,
  } = useModal({ isOpening, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, { [cls.isOpen]: isOpen }, [...additionalClasses])}>
        <div
          className={cls.container}
          role="button"
          tabIndex={0}
          onMouseDown={onModalClose}
        >
          <div className={cls.body} onMouseDown={onModalContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
