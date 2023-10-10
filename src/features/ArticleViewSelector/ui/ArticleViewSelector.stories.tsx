import { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '@/entities/Article';
import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleViewSelector as ArticleViewSelectorComponent } from './ArticleViewSelector';

const meta = {
  title: 'features/ArticleViewSelector',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleViewSelectorComponent,
  render: (args) => <ArticleViewSelectorComponent {...args} />,
} satisfies Meta<typeof ArticleViewSelectorComponent>;

export const Grid: StoryObj = {
  args: {
    view: ArticleView.SMALL,
  },
};

export const Rows: StoryObj = {
  args: {
    view: ArticleView.BIG,
  },
};

export default meta;
