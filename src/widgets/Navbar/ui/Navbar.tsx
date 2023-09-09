import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar: FC<NavbarProps> = (props) => {
   const { additionalClasses = [] } = props;

   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { t } = useTranslation();

   const toggle = () => {
      setIsOpen(true);
   };

   return (
      <div className={classNames(cls.Navbar, {}, [...additionalClasses])}>
         <Button additionalClasses={[cls.button]} onClick={toggle}>
            {t('Войти')}
         </Button>
         <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {t('Войти')}
         </Modal>
      </div>
   );
};
