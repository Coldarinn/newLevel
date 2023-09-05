import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
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
         <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
            {t('Главная')}
         </AppLink>
         {/* eslint-disable-next-line i18next/no-literal-string */}
         <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
            {t('О сайте')}
         </AppLink>
      </div>
   );
};
