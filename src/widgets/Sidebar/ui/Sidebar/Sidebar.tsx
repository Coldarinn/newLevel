import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
            onClick={onToggle}
         >
            {collapsed ? t('Открыть меню') : t('Скрыть меню')}
         </Button>
         <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
         </div>
      </div>
   );
};
