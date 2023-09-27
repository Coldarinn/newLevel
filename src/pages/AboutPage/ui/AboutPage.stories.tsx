import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import AboutPageComponent from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullpage',
  },
  component: AboutPageComponent,
  render: (args) => <AboutPageComponent {...args} />,
} satisfies Meta<typeof AboutPageComponent>;

export const AboutPage: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
