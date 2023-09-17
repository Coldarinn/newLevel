import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import ArticlesPageComponent from './ArticlesPage';

const meta = {
  title: 'pages/ArticlesPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticlesPageComponent>;

export default meta;

export const ArticlesPage = () => <ArticlesPageComponent />;
