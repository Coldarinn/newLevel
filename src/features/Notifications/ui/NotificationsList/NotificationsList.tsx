import { memo } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import { useGetNotificationsQuery } from '../../api/notificationsApi';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import cls from './NotificationsList.module.scss';

export const NotificationsList = memo(() => {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <div className={cls.list}>
        <Skeleton width={340} height={62} rounded="8px" />
        <Skeleton width={340} height={62} rounded="8px" />
        <Skeleton width={340} height={62} rounded="8px" />
        <Skeleton width={340} height={62} rounded="8px" />
      </div>
    );
  }

  return (
    <div className={cls.list}>
      {data?.map((item) => (
        <NotificationsItem key={item.id} item={item} />
      ))}
    </div>
  );
});
