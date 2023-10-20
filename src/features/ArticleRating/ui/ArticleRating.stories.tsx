import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import ArticleRatingComponent from './ArticleRating';

export default {
  title: 'features/ArticleRating',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleRatingComponent,
  render: (args) => <ArticleRatingComponent {...args} />,
} satisfies Meta<typeof ArticleRatingComponent>;

export const Default: StoryObj = {
  args: {
    articleId: '1',
    initialState: {
      user: {
        authData: { id: '1' },
      },
    },
  },
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};

export const WithRate: StoryObj = {
  args: {
    articleId: '1',
    initialState: {
      user: {
        authData: { id: '1' },
      },
    },
  },
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 4,
          },
        ],
      },
    ],
  },
};
