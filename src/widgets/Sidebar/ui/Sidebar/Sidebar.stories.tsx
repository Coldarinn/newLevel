import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Sidebar as SidebarComponent } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: SidebarComponent,
  render: (args) => <SidebarComponent {...args} />,
} satisfies Meta<typeof SidebarComponent>;

export const Auth: StoryObj = {
  args: {
    initialState: {
      user: {
        authData: {},
      },
    },
  },
};

export const NotAuth: StoryObj = {};

export const Collapsed: StoryObj = {
  args: {
    initialCollapse: true,
    initialState: {
      user: {
        authData: {},
      },
    },
  },
};

export default meta;
