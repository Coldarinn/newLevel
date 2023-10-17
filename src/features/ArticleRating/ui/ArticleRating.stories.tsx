import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from '@/shared/config/storybook/Decorator';
import { ArticleRating as ArticleRatingComponent } from './ArticleRating';

export default {
  title: '***/ArticleRating',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleRatingComponent,
  render: (args) => <ArticleRatingComponent {...args} />,
} satisfies Meta<typeof ArticleRatingComponent>;

export const ArticleRating: StoryObj = {
  args: {
    notCentered: true,
    initialState: {}
  },
};