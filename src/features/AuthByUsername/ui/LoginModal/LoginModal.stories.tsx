import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { LoginModal as LoginModalComponent } from './LoginModal';

const meta = {
   title: 'features/LoginModal',
   decorators: [DecoratedComponent],
   parameters: {
      layout: 'fullscreen',
   },
   component: LoginModalComponent,
   render: (args) => <LoginModalComponent {...args} />,
} satisfies Meta<typeof LoginModalComponent>;

export const LoginModal: StoryObj = {
   args: {
      isOpen: true,
   },
};

export default meta;
