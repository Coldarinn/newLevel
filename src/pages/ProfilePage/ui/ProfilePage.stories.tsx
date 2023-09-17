import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import ProfilePageComponent, { ProfilePageProps } from './ProfilePage';

const RenderComponent = (args: ProfilePageProps) => (
  <div style={{
    width: '660px',
    padding: '30px',
  }}
  >
    <ProfilePageComponent {...args} />
  </div>
);

const meta = {
  title: 'pages/ProfilePage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ProfilePageComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof ProfilePageComponent>;

export const Default: StoryObj = {
  args: {
    initialState: {
      profile: {
        form: {
          firstname: 'Kirill',
          lastname: 'Palkin',
          age: '22',
          currency: 'EUR',
          country: 'Россия',
          city: 'Moscow',
          username: 'admin',
          avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
        isLoading: false,
        readonly: false,
        error: '',
      },
    },
  },
};

export const Readonly: StoryObj = {
  args: {
    initialState: {
      profile: {
        data: {
          firstname: 'Kirill',
          lastname: 'Palkin',
          age: '22',
          currency: 'EUR',
          country: 'Россия',
          city: 'Moscow',
          username: 'admin',
          avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
        form: {
          firstname: 'Kirill',
          lastname: 'Palkin',
          age: '22',
          currency: 'EUR',
          country: 'Россия',
          city: 'Moscow',
          username: 'admin',
          avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
        isLoading: false,
        readonly: true,
        error: '',
      },
    },
  },
};

export const IsLoading: StoryObj = {
  args: {
    initialState: {
      profile: {
        isLoading: true,
        readonly: true,
        error: '',
      },
    },
  },
};

export const Error: StoryObj = {
  args: {
    initialState: {
      profile: {
        isLoading: false,
        readonly: true,
        error: 'Не удалось получить личные данные',
      },
    },
  },
};

export default meta;
