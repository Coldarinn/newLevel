import { type Meta, type StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Button as ButtonComponent, ButtonTheme, ButtonPadding } from '../../Button';

const meta = {
  title: 'shared/Button/Themes',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ButtonComponent,
  render: (args) => <ButtonComponent {...args} />,
} satisfies Meta<typeof ButtonComponent>;

export const Default: StoryObj = {
  args: {
    theme: ButtonTheme.DEFAULT,
    padding: ButtonPadding.M,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export const Clear: StoryObj = {
  args: {
    theme: ButtonTheme.CLEAR,
    padding: ButtonPadding.M,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export const Primary: StoryObj = {
  args: {
    theme: ButtonTheme.PRIMARY,
    padding: ButtonPadding.M,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export const Background: StoryObj = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    padding: ButtonPadding.M,
    children: 'Button text',
    disabled: false,
    additionalClasses: [],
  },
};

export const Disabled: StoryObj = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    padding: ButtonPadding.M,
    children: 'Button text',
    disabled: true,
    additionalClasses: [],
  },
};

export default meta;
