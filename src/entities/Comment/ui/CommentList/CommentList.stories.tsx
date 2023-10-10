import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { CommentList as CommentListComponent, CommentListProps } from './CommentList';

const RenderComponent = (args: CommentListProps) => (
  <div style={{
    width: '700px',
  }}
  >
    <CommentListComponent {...args} />
  </div>
);

const meta = {
  title: 'entities/CommentList',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: CommentListComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof RenderComponent>;

const comments = [
  {
    id: '1',
    text: 'My position on politics is pretty much neutral, I can safely say that I am for everything good and I am against everything bad, that is all that matters for me.',
    articleId: '1',
    user: {
      id: '1',
      username: 'user1',
      password: '123',
      roles: ['admin'],
      avatar: 'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg',
    },
  },
  {
    id: '2',
    text: "Howdy, I'm Tiffany Fenwick, add me to your friend list. My hometown is Vietnam, but right now, I live in Mortinsart. I love this town. What else do you want to know? My job is health service manager, I have a personal life as well, I like genealogy. Which music genre you love the most? I love modern blues and I can't imagine my life without books, I love Hippocrates – Medical Writings. After a long day at work, I love to play Katamari Damacy, I like following TV show - Date My Mom (2004–2006), reality, sometimes it is really funny. If you want to talk contact me at tiffanyfenwick@gmail.com Howdy, I'm Tiffany Fenwick, add me to your friend list. My hometown is Vietnam, but right now, I live in Mortinsart. I love this town. What else do you want to know? My job is health service manager, I have a personal life as well, I like genealogy. Which music genre you love the most? I love modern blues and I can't imagine my life without books, I love Hippocrates – Medical Writings. After a long day at work, I love to play Katamari Damacy, I like following TV show - Date My Mom (2004–2006), reality, sometimes it is really funny. If you want to talk contact me at tiffanyfenwick@gmail.com",
    articleId: '1',
    user: {
      id: '2',
      username: 'user2',
      password: '123',
      roles: ['user'],
      avatar: 'https://iphoneswallpapers.com/wp-content/uploads/2021/02/Hacker-Nation-iPhone-Wallpaper.jpg',
    },
  },
  {
    id: '3',
    text: 'Comment text',
    articleId: '1',
    user: {
      id: '3',
      username: 'user3',
      password: '123',
      roles: ['user'],
      avatar: 'https://pic.rutubelist.ru/user/f1/07/f1078786104bb3e02b7b16dd058b0a57.jpg',
    },
  },
];

export const Default: StoryObj = {
  args: {
    comments,
  },
};

export const IsLoading: StoryObj = {
  args: {
    comments,
    isLoading: true,
  },
};

export const Empty: StoryObj = {
  args: {
    comments: [],
  },
};

export default meta;
