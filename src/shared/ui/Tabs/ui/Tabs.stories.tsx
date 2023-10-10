import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Tabs as TabsComponent } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: TabsComponent,
  render: (args) => <TabsComponent {...args} />,
} satisfies Meta<typeof TabsComponent>;

export const Tabs: StoryObj = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'tab 2',
        content: 'tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
  },
};

export default meta;
