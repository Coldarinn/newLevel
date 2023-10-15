import { ReactNode } from 'react';

import { useModal } from '@/shared/hooks/useModal/useModal';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Portal } from '../../Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  additionalClasses?: string[],
  children: ReactNode;
  isOpening: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
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
      <div className={classNames(cls.modal, { [cls.isOpen]: isOpen }, [...additionalClasses])}>
        <div
          className={cls.container}
          role="button"
          tabIndex={0}
          onMouseDown={onModalClose}
        >
          <div className={cls.body}>
            <div
              className={cls.wrapper}
              onMouseDown={onModalContentClick}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
