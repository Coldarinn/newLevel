import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './Tabs.module.scss';

export interface TabItem<T> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T> {
  additionalClasses?: string[];
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (value: T) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    additionalClasses = [], tabs, onTabClick, value,
  } = props;

  const onClick = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab.value);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.tabs, {}, [...additionalClasses])}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          theme={tab.value === value ? ButtonTheme.BACKGROUND : ButtonTheme.DEFAULT}
          onClick={onClick(tab)}
          additionalClasses={[cls.button]}
        >
          {tab.content}
        </Button>
      ))}
    </div>
  );
};
