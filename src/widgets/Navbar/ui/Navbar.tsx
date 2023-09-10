import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar: FC<NavbarProps> = (props) => {
   const { additionalClasses = [] } = props;

   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { t } = useTranslation();

   const onShowModal = () => {
      setIsOpen(true);
   };

   const onCloseModal = () => {
      setIsOpen(false);
   };

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
