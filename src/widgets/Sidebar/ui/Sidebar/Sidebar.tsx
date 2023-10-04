import { getUserAuthData } from 'entities/User';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useState } from 'react';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';

import SiderbarItem from '../SiderbarItem/SiderbarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  additionalClasses?: string[],
}

export const Sidebar = memo((props: SidebarProps) => {
  const { additionalClasses = [] } = props;

  const auth = useAppSelector(getUserAuthData);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [...additionalClasses])}
    >
      <Button
        data-testid="sidebar-toggle"
        theme={ButtonTheme.CLEAR}
        additionalClasses={[cls.collapseBtn]}
        onClick={onToggle}
      >
        <span className={cls.arrowIcon}>
          <ArrowIcon />
        </span>
      </Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item) => ((item.authOnly && auth) || !item.authOnly)
        && <SiderbarItem key={item.path} item={item} collapsed={collapsed} />)}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher additionalClasses={[cls.lang]} />
      </div>
    </menu>
  );
});
