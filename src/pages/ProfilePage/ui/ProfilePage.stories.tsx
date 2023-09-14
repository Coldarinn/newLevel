import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import ProfilePageComponent from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ProfilePageComponent,
  render: (args) => <ProfilePageComponent {...args} />,
} satisfies Meta<typeof ProfilePageComponent>;

export const ProfilePage: StoryObj = {
  args: {
    initialState: {
      profile: {
        firstname: 'Тимур',
        lastname: 'Ульби',
        age: 22,
        currency: 'RUB',
        country: 'Russia',
        city: 'Moscow',
        username: 'admin',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      },
    },
  },
};

export default meta;
