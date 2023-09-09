import { type Meta, type StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Button as ButtonComponent, ButtonSize, ButtonTheme } from '../Button';

const meta = {
   title: 'shared/Button/Square',
   decorators: [DecoratedComponent],
   component: ButtonComponent,
   render: (args) => <ButtonComponent {...args} />,
} satisfies Meta<typeof ButtonComponent>;

export const M: StoryObj = {
   args: {
      theme: ButtonTheme.OUTLINE,
      size: ButtonSize.M,
      children: '>',
      square: true,
      additionalClasses: [],
   },
};

export const L: StoryObj = {
   args: {
      theme: ButtonTheme.OUTLINE,
      size: ButtonSize.L,
      children: '>',
      square: true,
      additionalClasses: [],
   },
};

export const XL: StoryObj = {
   args: {
      theme: ButtonTheme.OUTLINE,
      size: ButtonSize.XL,
      children: '>',
      square: true,
      additionalClasses: [],
   },
};

export default meta;
