import { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '@/entities/Article';
import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleTypeTabs as ArticleTypeTabsComponent } from './ArticleTypeTabs';

const meta = {
  title: 'features/ArticleTypeTabs',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleTypeTabsComponent,
  render: (args) => <ArticleTypeTabsComponent {...args} />,
} satisfies Meta<typeof ArticleTypeTabsComponent>;

export const ArticleTypeTabs: StoryObj = {
  args: {
    type: ArticleType.ECONOMICS,
  },
};

export default meta;
