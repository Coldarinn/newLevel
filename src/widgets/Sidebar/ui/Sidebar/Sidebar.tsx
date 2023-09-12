import { memo, useState } from 'react';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import SiderbarItem from '../SiderbarItem/SiderbarItem';

interface SidebarProps {
  additionalClasses?: string[],
}

export const Sidebar = memo((props: SidebarProps) => {
  const { additionalClasses = [] } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

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
        {SidebarItemsList.map((item) => <SiderbarItem key={item.path} item={item} collapsed={collapsed} />)}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher additionalClasses={[cls.lang]} />
      </div>
    </div>
  );
});
