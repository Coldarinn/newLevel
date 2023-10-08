import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Errors } from 'shared/const/errors';

import { EditableProfileCard as EditableProfileCardComponent } from './EditableProfileCard';

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

const meta = {
  title: 'features/EditableProfileCard',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: EditableProfileCardComponent,
  render: (args) => <EditableProfileCardComponent {...args} />,
} satisfies Meta<typeof EditableProfileCardComponent>;

export const Edit: StoryObj = {
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
      user: {
        authData: data,
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
