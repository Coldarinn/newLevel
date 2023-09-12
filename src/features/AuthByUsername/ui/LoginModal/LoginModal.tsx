import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean,
  onClose?: () => void,
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen = false, onClose } = props;

  return (
    <Modal isOpening={isOpen} onClose={() => onClose?.()} lazy>
      <div className={cls.LoginModal}>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Modal>
  );
};
