import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Avatar } from '../../../Avatar';
import { Dropdown as DropdownComponent } from './Dropdown';

const avatar = 'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg';

const items = [
  {
    id: 1,
    content: 'Link #1 text',
    href: 'https://yandex.ru',
  },
  {
    id: 2,
    content: 'Button #1 text',
    onClick: action('onClick'),
  },
  {
    id: 3,
    content: 'Link #2 text',
    href: 'https://google.ru',
  },
  {
    id: 4,
    content: 'Button #2 text',
    onClick: action('onClick'),
  },
];

const meta = {
  title: 'shared/Popups/Dropdown',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: DropdownComponent,
  render: (args) => <DropdownComponent {...args} />,
} satisfies Meta<typeof DropdownComponent>;

export const BottomLeft: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'bottom left',
    items,
    trigger: <Avatar size={30} src={avatar} />,
  },
};

export const BottomRight: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'bottom right',
    items,
    trigger: <Avatar size={30} src={avatar} />,
  },
};

export const TopLeft: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'top left',
    items,
    trigger: <Avatar size={30} src={avatar} />,
  },
};

export const TopRight: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'top right',
    items,
    trigger: <Avatar size={30} src={avatar} />,
  },
};

export const Closed: StoryObj = {
  args: {
    direction: 'bottom left',
    items: [
      {
        id: 1,
        content: 'Link #1 text',
        href: 'https://yandex.ru',
      },
      {
        id: 2,
        content: 'Button #1 text',
        onClick: action('onClick'),
      },
      {
        id: 3,
        content: 'Link #2 text',
        href: 'https://google.ru',
      },
      {
        id: 4,
        content: 'Button #2 text',
        onClick: action('onClick'),
      },
    ],
    trigger: <Avatar size={30} src={avatar} />,
  },
};

export default meta;
