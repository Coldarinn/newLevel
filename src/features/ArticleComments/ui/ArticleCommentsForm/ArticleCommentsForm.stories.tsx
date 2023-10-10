import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleCommentsForm as ArticleCommentsFormComponent } from './ArticleCommentsForm';

const RenderComponent = (args: any) => (
  <div style={{
    width: '700px',
  }}
  >
    <ArticleCommentsFormComponent {...args} />
  </div>
);

const meta = {
  title: 'features/ArticleCommentsForm',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleCommentsFormComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof RenderComponent>;

export const Default: StoryObj = {};

export const WithValue: StoryObj = {
  args: {
    initialState: {
      commentForm: {
        text: 'Input text',
      },
    },
  },
};

export default meta;
