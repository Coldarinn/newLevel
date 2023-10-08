import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent as ArticleCodeBlockComponentComponent } from './ArticleCodeBlockComponent';

const meta = {
  title: 'entities/ArticleCodeBlockComponent',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleCodeBlockComponentComponent,
  render: (args) => <ArticleCodeBlockComponentComponent {...args} />,
} satisfies Meta<typeof ArticleCodeBlockComponentComponent>;

const block = {
  type: ArticleBlockType.CODE,
  code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};

export const ArticleCodeBlockComponent: StoryObj = {
  args: {
    block,
  },
};

export default meta;
