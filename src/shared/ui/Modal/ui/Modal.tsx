import {
  FC, MouseEventHandler, ReactNode, useCallback, useEffect, useState,
} from 'react';

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

export const Modal: FC<ModalProps> = (props) => {
  const {
    additionalClasses = [], children, isOpening, onClose, lazy = false,
  } = props;

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpening) {
      setIsMounted(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 0);
    }
  }, [isOpen, isOpening]);

  const closeHandler = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
          onMouseDown={closeHandler}
        >
          <div className={cls.body}>
            <div
              className={cls.wrapper}
              onMouseDown={onContentClick}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
