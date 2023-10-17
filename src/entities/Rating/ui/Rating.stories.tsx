import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from '@/shared/config/storybook/Decorator';
import { Rating as RatingComponent } from './Rating';

export default {
  title: '***/Rating',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: RatingComponent,
  render: (args) => <RatingComponent {...args} />,
} satisfies Meta<typeof RatingComponent>;

export const Rating: StoryObj = {
  args: {
    notCentered: true,
    initialState: {}
  },
};