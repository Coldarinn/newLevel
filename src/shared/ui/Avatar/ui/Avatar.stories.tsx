import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Avatar as AvatarComponent } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta = {
  title: 'shared/Avatar',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: AvatarComponent,
  render: (args) => <AvatarComponent {...args} />,
} satisfies Meta<typeof AvatarComponent>;

export const Avatar: StoryObj = {
  args: {
    size: 250,
    src: AvatarImg,
  },
};

export default meta;
