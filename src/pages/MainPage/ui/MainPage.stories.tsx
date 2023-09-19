import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import MainPageComponent from './MainPage';

const meta = {
  title: 'pages/MainPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullpage',
  },
  component: MainPageComponent,
  render: (args) => <MainPageComponent {...args} />,
} satisfies Meta<typeof MainPageComponent>;

export const MainPage: StoryObj = {
  args: {
    notCentered: true,
  },
};

export default meta;
