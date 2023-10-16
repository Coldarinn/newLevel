import { memo, useCallback, useState } from 'react';

import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { detectDevice } from '@/shared/lib/deviceDetect/deviceDetect';
import { Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Popover } from '@/shared/ui/Popups';

import { NotificationsList } from '../NotificationsList/NotificationsList';
import cls from './Notifications.module.scss';

interface NotificationsProps {
  additionalClasses?: string[];
}

export const Notifications = memo((props: NotificationsProps) => {
  const { additionalClasses = [] } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button
      additionalClasses={[cls.button]}
      onClick={onOpenDrawer}
    >
      <NotificationIcon className={cls.icon} />
    </Button>
  );

  if (detectDevice()) {
    return (
      <>
        {trigger}
        <AnimationProvider>
          <Drawer isOpening={isOpen} onClose={onCloseDrawer}>
            <div className={cls.drawer}>
              <NotificationsList />
            </div>
          </Drawer>
        </AnimationProvider>
      </>
    );
  }

  return (
    <Popover
      additionalClasses={additionalClasses}
      trigger={trigger}
      direction="bottom left"
    >
      <div className={cls.popover}>
        <NotificationsList />
      </div>
    </Popover>
  );
});
