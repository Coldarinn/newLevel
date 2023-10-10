import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { AppLink as AppLinkComponent, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: AppLinkComponent,
  render: (args) => <AppLinkComponent {...args} />,
} satisfies Meta<typeof AppLinkComponent>;

export const AppLink: StoryObj = {
  args: {
    children: 'Link text',
    theme: AppLinkTheme.DEFAULT,
    additionalClasses: [],
  },
};

export default meta;
