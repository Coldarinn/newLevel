import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean,
  onClose?: () => void,
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen = false, onClose } = props;

  return (
    <Modal isOpening={isOpen} onClose={() => onClose?.()} lazy>
      <LoginForm />
    </Modal>
  );
};
