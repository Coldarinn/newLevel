import {
   FC, ReactNode, useCallback, useEffect, MouseEventHandler,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  additionalClasses?: string[],
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
   const {
      additionalClasses = [], children, isOpen, onClose,
   } = props;

   const closeHandler = useCallback(() => {
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

   return (
      <Portal>
         <div className={classNames(cls.modal, { [cls.isOpen]: isOpen }, [...additionalClasses])}>
            <div
               className={cls.container}
               role="button"
               tabIndex={0}
               onMouseDown={onClose}
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
