import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { ArticleRecommend as ArticleRecommendComponent } from './ArticleRecommend';

const meta = {
  title: 'features/ArticleRecommend',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleRecommendComponent,
  render: (args) => <ArticleRecommendComponent {...args} />,
} satisfies Meta<typeof ArticleRecommendComponent>;

export const ArticleRecommend: StoryObj = {};

export default meta;
