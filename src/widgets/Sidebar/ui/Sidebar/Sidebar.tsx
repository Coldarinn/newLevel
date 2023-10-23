import { memo, useState } from 'react';

import { getUserAuthData, useUserIsLoading } from '@/entities/User';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';

import { SidebarItemsList } from '../../model/items';
import SiderbarItem from '../SiderbarItem/SiderbarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  additionalClasses?: string[];
  initialCollapse?: boolean;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { additionalClasses = [], initialCollapse } = props;

  const auth = useAppSelector(getUserAuthData);
  const isLoading = useUserIsLoading();

  const [collapsed, setCollapsed] = useState<boolean>(initialCollapse ?? false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  if (isLoading) {
    return (
      <section
        data-testid="sidebar"
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
          ...additionalClasses,
        ])}
      >
        <Skeleton width="100%" height="100%" />
        {/* <Button
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
        {SidebarItemsList.map(
          (item) =>
            ((item.authOnly && auth) || !item.authOnly) && (
              <SiderbarItem key={item.path} item={item} collapsed={collapsed} />
            ),
        )}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher additionalClasses={[cls.lang]} />
      </div> */}
      </section>
    );
  }

  return (
    <section
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        ...additionalClasses,
      ])}
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
        {SidebarItemsList.map(
          (item) =>
            ((item.authOnly && auth) || !item.authOnly) && (
              <SiderbarItem key={item.path} item={item} collapsed={collapsed} />
            ),
        )}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher additionalClasses={[cls.lang]} />
      </div>
    </section>
  );
});
