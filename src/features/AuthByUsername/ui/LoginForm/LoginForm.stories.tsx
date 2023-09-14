import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import LoginFormComponent, { LoginFormProps } from './LoginForm';

const RenderComponent = (args: LoginFormProps) => (
  <div style={{
    width: '500px',
    background: 'var(--bg-default-color)',
    padding: '20px 50px',
    borderRadius: '8px',
  }}
  >
    <LoginFormComponent {...args} />
  </div>
);

const meta = {
  title: 'features/LoginForm',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: LoginFormComponent,
  render: (args) => <RenderComponent {...args} />,
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
