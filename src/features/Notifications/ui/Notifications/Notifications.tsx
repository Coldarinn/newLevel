import { memo } from 'react';

import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Button } from '@/shared/ui/Button';
import { Popover } from '@/shared/ui/Popups';

import { NotificationsList } from '../NotificationsList/NotificationsList';
import cls from './Notifications.module.scss';

export const Notifications = memo(() => (
  <Popover
    trigger={(
      <Button
        additionalClasses={[cls.button]}
      >
        <NotificationIcon className={cls.icon} />
      </Button>
    )}
    direction="bottom left"
  >
    <NotificationsList />
  </Popover>
));
