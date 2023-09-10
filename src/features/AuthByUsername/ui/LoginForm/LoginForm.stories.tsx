import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { LoginForm as LoginFormComponent } from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: LoginFormComponent,
  render: (args) => <LoginFormComponent {...args} />,
} satisfies Meta<typeof LoginFormComponent>;

export const Default: StoryObj = {
  args: {
    initialState: { loginForm: { username: '123', password: 'asd' } },
  },
};

export const IsLoading: StoryObj = {
  args: {
    initialState: { loginForm: { isLoading: true } },
  },
};

export const WithError: StoryObj = {
  args: {
    initialState: { loginForm: { username: '123', password: 'asd', error: 'Пользователь с введенным именем и паролем не найден' } },
  },
};

export default meta;
