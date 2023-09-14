import { type Meta, type StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Button as ButtonComponent, ButtonTheme, ButtonPadding } from '../../Button';

const meta = {
  title: 'shared/Button/Paddings',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ButtonComponent,
  render: (args) => <ButtonComponent {...args} />,
} satisfies Meta<typeof ButtonComponent>;

export const S: StoryObj = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    padding: ButtonPadding.S,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export const M: StoryObj = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    padding: ButtonPadding.M,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export const L: StoryObj = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    padding: ButtonPadding.L,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export default meta;
