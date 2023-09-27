import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import ArticlesPageComponent from './ArticlesPage';

const meta = {
  title: 'pages/ArticlesPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullpage',
  },
  component: ArticlesPageComponent,
  render: (args) => <ArticlesPageComponent {...args} />,
} satisfies Meta<typeof ArticlesPageComponent>;

export const ArticlesPage: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
