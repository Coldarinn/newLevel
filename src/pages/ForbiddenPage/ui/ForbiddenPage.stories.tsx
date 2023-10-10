import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ForbiddenPage as ForbiddenPageComponent } from './ForbiddenPage';

const meta = {
  title: 'pages/ForbiddenPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ForbiddenPageComponent,
  render: (args) => <ForbiddenPageComponent {...args} />,
} satisfies Meta<typeof ForbiddenPageComponent>;

export const ForbiddenPage: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
