import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Errors } from 'shared/const/errors';

import { ProfileCardProps } from '../model/types/profile';
import { ProfileCard as ProfileCardComponent } from './ProfileCard';

const RenderComponent = (args: ProfileCardProps) => (
  <div style={{
    width: '700px',
    margin: '0 auto',
  }}
  >
    <ProfileCardComponent {...args} />
  </div>
);

const meta = {
  title: 'entities/ProfileCard',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ProfileCardComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof RenderComponent>;

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

export const Default: StoryObj = {
  args: {
    notCentered: true,
    data,
    isLoading: false,
    error: '',
    readonly: false,
  },
};

export const IsLoading: StoryObj = {
  args: {
    notCentered: true,
    data,
    isLoading: true,
    error: '',
    readonly: false,
  },
};

export const Readonly: StoryObj = {
  args: {
    notCentered: true,
    data,
    isLoading: false,
    error: '',
    readonly: true,
  },
};

export const Error: StoryObj = {
  args: {
    notCentered: true,
    data,
    isLoading: false,
    error: Errors.GET_PROFILE,
    readonly: false,
  },
};

export const NotValid: StoryObj = {
  args: {
    notCentered: true,
    data: {
      id: '1',
      firstname: '',
      lastname: '',
      age: '22',
      currency: 'RUB',
      country: 'Россия',
      city: '',
      username: 'user1',
      avatar: 'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg',
    },
    isLoading: false,
    error: '',
    readonly: false,
  },
};

export default meta;
