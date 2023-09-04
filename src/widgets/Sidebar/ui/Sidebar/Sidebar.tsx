import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  additionalClasses?: string[],
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { additionalClasses = [] } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
   setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [...additionalClasses])}>
      <Button onClick={onToggle}>
         toggle
      </Button>
      <div className={cls.switchers}>
         <ThemeSwitcher />
      </div>
    </div>
  )
};
