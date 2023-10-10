import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { PageLoader as PageLoaderComponent } from './PageLoader';

const meta = {
  title: 'widgets/PageLoader',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: PageLoaderComponent,
  render: (args) => <PageLoaderComponent {...args} />,
} satisfies Meta<typeof PageLoaderComponent>;

export const PageLoader: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
