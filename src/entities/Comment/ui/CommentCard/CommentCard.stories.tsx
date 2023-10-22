import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import {
  CommentCard as CommentCardComponent,
  CommentCardProps,
} from './CommentCard';

const RenderComponent = (args: CommentCardProps) => (
  <div
    style={{
      width: '700px',
    }}
  >
    <CommentCardComponent {...args} />
  </div>
);

const meta = {
  title: 'entities/CommentCard',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: CommentCardComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof RenderComponent>;

const comment = {
  id: '1',
  text: 'My position on politics is pretty much neutral, I can safely say that I am for everything good and I am against everything bad, that is all that matters for me.',
  articleId: '1',
  user: {
    id: '1',
    username: 'user1',
    password: '123',
    roles: ['admin'],
    avatar:
      'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg',
  },
};

export const CommentCard: StoryObj = {
  args: {
    comment,
  },
};

export default meta;
