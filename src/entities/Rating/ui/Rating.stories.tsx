import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Rating as RatingComponent } from './Rating';

export default {
  title: 'entities/Rating',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: RatingComponent,
  render: (args) => <RatingComponent {...args} />,
} satisfies Meta<typeof RatingComponent>;

export const Default: StoryObj = {
  args: {
    title: 'Оцените статью',
    feedbackTitle: 'Оставьте свой отзыв о статье, это поможет улучшить качество',
    hasFeedback: false,
  },
};

export const WithFeedback: StoryObj = {
  args: {
    title: 'Оцените статью',
    feedbackTitle: 'Оставьте свой отзыв о статье, это поможет улучшить качество',
    hasFeedback: true,
  },
};

export const WithRate: StoryObj = {
  args: {
    rate: 4,
    title: 'Оцените статью',
    feedbackTitle: 'Оставьте свой отзыв о статье, это поможет улучшить качество',
    hasFeedback: false,
  },
};
