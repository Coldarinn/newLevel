import type { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Button, ThemeButton } from './Button';

const meta = {
   title: 'shared/Button',
   tags: ['autodocs'],
   decorators: [DecoratedComponent],
} satisfies Meta<typeof Button>;

const Template = (args: any) => <Button {...args} />;

export const Clear = Template.bind({});

Clear.args = {
   children: 'Button text',
   theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});

Outline.args = {
   children: 'Button text',
   theme: ThemeButton.OUTLINE,
};

export default meta;
