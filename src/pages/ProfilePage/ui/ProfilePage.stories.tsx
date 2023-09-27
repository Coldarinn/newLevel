import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Errors } from 'shared/const/errors';

import ProfilePageComponent, { ProfilePageProps } from './ProfilePage';

const data = {
  id: '1',
  firstname: 'Kirill 1',
  lastname: 'Palkin',
  age: '22',
  currency: 'RUB',
  country: 'Россия',
  city: 'Moscow',
  username: 'user1',
  avatar: 'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg',
};

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
    notCentered: true,
    initialState: {
      profile: {
        data,
        form: data,
        isLoading: false,
        readonly: false,
        error: '',
      },
    },
  },
};

export const Readonly: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      profile: {
        data,
        form: data,
        isLoading: false,
        readonly: true,
        error: '',
      },
    },
  },
};

export const IsLoading: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      profile: {
        data,
        form: data,
        isLoading: true,
        readonly: true,
        error: '',
      },
    },
  },
};

export const Error: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      profile: {
        data,
        form: data,
        isLoading: false,
        readonly: true,
        error: Errors.GET_PROFILE,
      },
    },
  },
};

export default meta;
