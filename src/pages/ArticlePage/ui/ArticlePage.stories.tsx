import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import ArticlePageComponent from './ArticlePage';

const meta = {
  title: 'pages/ArticlePage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticlePageComponent>;

export default meta;

export const ArticlePage = () => <ArticlePageComponent />;
