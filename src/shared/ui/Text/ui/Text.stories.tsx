import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Text as TextComponent, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: TextComponent,
  render: (args) => <TextComponent {...args} />,
} satisfies Meta<typeof TextComponent>;

export const Default: StoryObj = {
  args: {
    theme: TextTheme.DEFAULT,
    title: 'Title example',
    text: 'Text example',
    additionalClasses: [],
  },
};

export const Danger: StoryObj = {
  args: {
    theme: TextTheme.DANGER,
    title: 'Title example',
    text: 'Text example',
    additionalClasses: [],
  },
};

export default meta;
