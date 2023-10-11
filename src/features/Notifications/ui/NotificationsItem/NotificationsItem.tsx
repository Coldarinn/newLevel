import { memo } from 'react';

import { Text } from '@/shared/ui/Text';

import { Notification } from '../../model/types/notification';
import cls from './NotificationsItem.module.scss';

export interface NotificationsItemProps {
  item: Notification;
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
  const { item } = props;
  const content = (
    <div className={cls.item}>
      <div className={cls.flex}>
        <div className={cls.circle} />
        <Text text={item.title} />
      </div>
      <Text text={item.description} />
    </div>
  );

  if (item.href) {
    return (
      <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
