import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { StarRating as StarRatingComponent } from './StarRating';

export default {
  title: 'shared/StarRating',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: StarRatingComponent,
  render: (args) => <StarRatingComponent {...args} />,
} satisfies Meta<typeof StarRatingComponent>;

export const Default: StoryObj = {};
export const SelectedStars: StoryObj = {
  args: {
    selectedStars: 3,
  },
};
