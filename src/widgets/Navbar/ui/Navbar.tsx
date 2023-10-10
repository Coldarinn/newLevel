import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown';

import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar = memo((props: NavbarProps) => {
  const { additionalClasses = [] } = props;

  const dispatch = useAppDispatch();

  const authData = useAppSelector(getUserAuthData);
  const isAdmin = useAppSelector(isUserAdmin);

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
      <header className={classNames(cls.navbar, {}, [...additionalClasses])}>
        <Dropdown
          direction="bottom left"
          items={[
            ...(isAdmin ? [{
              id: 1,
              content: t('Админка'),
              href: RoutePath.admin,
            }] : []),
            {
              id: 2,
              content: t('Профиль'),
              href: `${RoutePath.profile}/${authData.id}`,
            },
            {
              id: 3,
              content: t('Выйти'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [...additionalClasses])}>
      <Button additionalClasses={[cls.button]} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onCloseModal} />
    </header>
  );
});
