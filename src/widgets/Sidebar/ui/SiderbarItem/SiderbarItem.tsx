import { FC, memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SiderbarItem.module.scss';

interface SiderbarItemProps {
  item: SidebarItemType,
  collapsed: boolean,
}

const SiderbarItem = (props: SiderbarItemProps) => {
  const {
    collapsed, item,
  } = props;

  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      additionalClasses={[cls.item]}
    >
      <item.Icon className={cls.icon} />
      <span className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}>
        {t(item.text)}
      </span>
    </AppLink>
  );
};

export default memo(SiderbarItem);
