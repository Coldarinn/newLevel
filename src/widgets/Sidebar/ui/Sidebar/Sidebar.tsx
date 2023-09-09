import { FC, useState } from 'react';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  additionalClasses?: string[],
}

export const Sidebar: FC<SidebarProps> = (props) => {
   const { additionalClasses = [] } = props;

   const [collapsed, setCollapsed] = useState<boolean>(false);

   const { t } = useTranslation();

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   return (
      <div
         data-testid="sidebar"
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [...additionalClasses])}
      >
         <Button
            data-testid="sidebar-toggle"
            additionalClasses={[cls.collapseBtn]}
            onClick={onToggle}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
         >
            {collapsed ? '>' : '<'}
         </Button>
         <div className={cls.items}>
            <AppLink
               theme={AppLinkTheme.SECONDARY}
               to={RoutePath.main}
               additionalClasses={[cls.item]}
            >
               <MainIcon className={cls.icon} />
               <span className={cls.link}>
                  {t('Главная')}
               </span>
            </AppLink>
            <AppLink
               theme={AppLinkTheme.SECONDARY}
               to={RoutePath.about}
               additionalClasses={[cls.item]}
            >
               <AboutIcon className={cls.icon} />
               <span className={cls.link}>
                  {t('О сайте')}
               </span>
            </AppLink>
         </div>
         <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher additionalClasses={[cls.lang]} />
         </div>
      </div>
   );
};
