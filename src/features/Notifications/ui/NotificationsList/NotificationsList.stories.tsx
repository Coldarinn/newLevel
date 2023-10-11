import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { NotificationsList as NotificationsListComponent } from './NotificationsList';

const notifs = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие 1',
    userId: '1',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие 2',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие 3',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Произошло какое-то событие 4',
    userId: '1',
  },
  {
    id: '5',
    title: 'Уведомление 5',
    description: 'Произошло какое-то событие 5',
    userId: '2',
  },
  {
    id: '6',
    title: 'Уведомление 6',
    description: 'Произошло какое-то событие 6',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '7',
    title: 'Уведомление 7',
    description: 'Произошло какое-то событие 7',
    userId: '1',
  },
  {
    id: '8',
    title: 'Уведомление 8',
    description: 'Произошло какое-то событие 8',
    userId: '2',
  },
];

export default {
  title: 'features/Notifications/NotificationsList',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
    mockData: [
      {
        url: `${__API_URL__}/notifications`,
        method: 'GET',
        status: 200,
        response: notifs,
      },
    ],
  },
  component: NotificationsListComponent,
  render: () => <NotificationsListComponent />,
} satisfies Meta<typeof NotificationsListComponent>;

export const NotificationsList: StoryObj = {};
