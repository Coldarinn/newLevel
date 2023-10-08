import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { NotFoundPage as NotFoundPageComponent } from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: NotFoundPageComponent,
  render: (args) => <NotFoundPageComponent {...args} />,
} satisfies Meta<typeof NotFoundPageComponent>;

export const NotFoundPage: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
