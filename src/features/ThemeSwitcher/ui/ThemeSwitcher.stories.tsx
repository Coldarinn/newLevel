import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ThemeSwitcher as ThemeSwitcherComponent } from './ThemeSwitcher';

const meta = {
  title: 'features/ThemeSwitcher',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ThemeSwitcherComponent,
  render: (args) => <ThemeSwitcherComponent {...args} />,
} satisfies Meta<typeof ThemeSwitcherComponent>;

export const ThemeSwitcher: StoryObj = {};

export default meta;
