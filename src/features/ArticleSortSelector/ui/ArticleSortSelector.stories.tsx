import { Meta, StoryObj } from '@storybook/react';

import { ArticleSort } from '@/entities/Article';
import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleSortSelector as ArticleSortSelectorComponent } from './ArticleSortSelector';

const meta = {
  title: 'features/ArticleSortSelector',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleSortSelectorComponent,
  render: (args) => <ArticleSortSelectorComponent {...args} />,
} satisfies Meta<typeof ArticleSortSelectorComponent>;

export const ArticleSortSelector: StoryObj = {
  args: {
    sort: ArticleSort.VIEWS,
    order: 'asc',
  },
};

export default meta;
