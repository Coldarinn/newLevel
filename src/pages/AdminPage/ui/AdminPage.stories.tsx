import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { AdminPage as AdminPageComponent } from './AdminPage';

const meta = {
  title: 'pages/AdminPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: AdminPageComponent,
  render: (args) => <AdminPageComponent {...args} />,
} satisfies Meta<typeof AdminPageComponent>;

export const AdminPage: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
