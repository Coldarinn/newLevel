import { type Meta, type StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Button as ButtonComponent, ButtonSize, ButtonTheme } from '../Button';

const meta = {
   title: 'shared/Button/Theme',
   decorators: [DecoratedComponent],
   parameters: {
      layout: 'fullscreen',
   },
   component: ButtonComponent,
   render: (args) => <ButtonComponent {...args} />,
} satisfies Meta<typeof ButtonComponent>;

export const Clear: StoryObj = {
   args: {
      theme: ButtonTheme.CLEAR,
      size: ButtonSize.M,
      children: 'Button text',
      additionalClasses: [],
   },
};

export const Outline: StoryObj = {
   args: {
      theme: ButtonTheme.OUTLINE,
      size: ButtonSize.M,
      children: 'Button text',
      additionalClasses: [],
   },
};

export const Background: StoryObj = {
   args: {
      theme: ButtonTheme.BACKGROUND,
      size: ButtonSize.M,
      children: 'Button text',
      additionalClasses: [],
   },
};

export const BackgroundInverted: StoryObj = {
   args: {
      theme: ButtonTheme.BACKGROUND_INVERTED,
      size: ButtonSize.M,
      children: 'Button text',
      additionalClasses: [],
   },
};

export default meta;
