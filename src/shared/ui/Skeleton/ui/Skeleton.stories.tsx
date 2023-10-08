import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Skeleton as SkeletonComponent } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: SkeletonComponent,
  render: (args) => <SkeletonComponent {...args} />,
} satisfies Meta<typeof SkeletonComponent>;

export const Circle: StoryObj = {
  args: {
    width: '100px',
    height: '100px',
    rounded: '50%',
    additionalClasses: [],
  },
};

export const Rectangle: StoryObj = {
  args: {
    width: '300px',
    height: '100px',
    rounded: '8px',
    additionalClasses: [],
  },
};

export default meta;
