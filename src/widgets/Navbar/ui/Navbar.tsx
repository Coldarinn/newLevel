import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  additionalClasses?: string[],
}

export const Navbar: FC<NavbarProps> = (props) => {
   const { additionalClasses = [] } = props;

   const { t } = useTranslation();

   return (
      <div className={classNames(cls.Navbar, {}, [...additionalClasses])}>
         {t('something...')}
      </div>
   );
};
