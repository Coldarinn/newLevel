import {
  MouseEventHandler,
  useCallback, useEffect, useState,
} from 'react';

interface UseModalProps {
  isOpening: boolean;
  onClose?: (number?: number) => void;
}

export const useModal = (props: UseModalProps) => {
  const { isOpening, onClose } = props;

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onModalClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (isOpening) {
      setIsMounted(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 0);
    } else {
      onModalClose();
    }
  }, [isOpen, isOpening, onModalClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onModalClose();
    }
  }, [onModalClose]);

  const onModalContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
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

  return {
    isOpen,
    isMounted,
    onModalClose,
    onModalContentClick,
  };
};
