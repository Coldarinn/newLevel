import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { NotificationsItem as NotificationsItemComponent } from './NotificationsItem';

export default {
  title: 'features/Notifications/NotificationsItem',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: NotificationsItemComponent,
  render: (args) => <NotificationsItemComponent {...args} />,
} satisfies Meta<typeof NotificationsItemComponent>;

export const NotificationsItem: StoryObj = {
  args: {
    item: {
      id: '5',
      title: 'Уведомление 5',
      description: 'Произошло какое-то событие 5',
      userId: '2',
    },
  },
};
