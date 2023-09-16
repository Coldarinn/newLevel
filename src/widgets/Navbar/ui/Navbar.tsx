import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar = memo((props: NavbarProps) => {
  const { additionalClasses = [] } = props;

  const dispatch = useAppDispatch();

  const authData = useAppSelector(getUserAuthData);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  const onShowModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [...additionalClasses])}>
        <Button additionalClasses={[cls.button]} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [...additionalClasses])}>
      <Button additionalClasses={[cls.button]} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onCloseModal}>
        {t('Войти')}
      </LoginModal>
    </div>
  );
});
