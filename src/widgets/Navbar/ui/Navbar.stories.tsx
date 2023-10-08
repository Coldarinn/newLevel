import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Navbar as NavbarComponent } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: NavbarComponent,
  render: (args) => <NavbarComponent {...args} />,
} satisfies Meta<typeof NavbarComponent>;

export const Navbar: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
