import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar: FC<NavbarProps> = (props) => {
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
};
