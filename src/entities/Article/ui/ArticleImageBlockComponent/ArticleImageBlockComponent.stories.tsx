import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleBlockType } from '../../model/types/article';
import { ArticleImageBlockComponent as ArticleImageBlockComponentComponent } from './ArticleImageBlockComponent';

const meta = {
  title: 'entities/ArticleImageBlockComponent',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleImageBlockComponentComponent,
  render: (args) => <ArticleImageBlockComponentComponent {...args} />,
} satisfies Meta<typeof ArticleImageBlockComponentComponent>;

export const ArticleImageBlockComponent: StoryObj = {
  args: {
    block: {
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - Title example',
    },
  },
};

export default meta;
