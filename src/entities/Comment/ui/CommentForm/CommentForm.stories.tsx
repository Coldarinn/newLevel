import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { CommentForm as CommentFormComponent, CommentFormProps } from './CommentForm';

const RenderComponent = (args: CommentFormProps) => (
  <div style={{
    width: '700px',
  }}
  >
    <CommentFormComponent {...args} />
  </div>
);

const meta = {
  title: 'entities/CommentForm',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: CommentFormComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof RenderComponent>;

export const Default: StoryObj = {};

export const WithText: StoryObj = {
  args: {
    initialState: {
      commentForm: {
        text: 'Text example',
      },
    },
  },
};

export default meta;
