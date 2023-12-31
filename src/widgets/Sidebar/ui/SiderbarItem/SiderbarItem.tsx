import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';

import { SidebarItemType } from '../../model/items';
import cls from './SiderbarItem.module.scss';

interface SiderbarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SiderbarItem = (props: SiderbarItemProps) => {
  const { collapsed, item } = props;

  const { t } = useTranslation();

  return (
    <AppLink to={item.path} additionalClasses={[cls.item]}>
      <span className={cls.iconWrapper}>
        <item.Icon className={cls.icon} />
      </span>
      <span
        className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
      >
        {t(item.text)}
      </span>
    </AppLink>
  );
};

export default memo(SiderbarItem);
