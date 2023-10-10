import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { PageError as PageErrorComponent } from './PageError';

const meta = {
  title: 'widgets/PageError',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: PageErrorComponent,
  render: (args) => <PageErrorComponent {...args} />,
} satisfies Meta<typeof PageErrorComponent>;

export const PageError: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
