import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Drawer as DrawerComponent } from './Drawer';

export default {
  title: 'shared/Drawer',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: DrawerComponent,
  render: (args) => <DrawerComponent {...args} />,
} satisfies Meta<typeof DrawerComponent>;

export const Drawer: StoryObj = {
  args: {
    notCentered: true,
    initialState: {},
  },
};
