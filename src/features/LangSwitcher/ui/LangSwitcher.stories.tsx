import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { LangSwitcher as LangSwitcherComponent } from './LangSwitcher';

const meta = {
  title: 'features/LangSwitcher',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: LangSwitcherComponent,
  render: (args) => <LangSwitcherComponent {...args} />,
} satisfies Meta<typeof LangSwitcherComponent>;

export const LangSwitcher: StoryObj = {};

export default meta;
