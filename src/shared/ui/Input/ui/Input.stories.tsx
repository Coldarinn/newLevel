import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Input as InputComponent } from './Input';

const meta = {
  title: 'shared/Input',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: InputComponent,
  render: (args) => <InputComponent {...args} />,
} satisfies Meta<typeof InputComponent>;

export const Placeholder: StoryObj = {
  args: {
    placeholder: 'Placeholder text',
  },
};

export const WithoutPlaceholder: StoryObj = {};

export const Value: StoryObj = {
  args: {
    placeholder: 'Placeholder text',
    value: 'Value text',
  },
};

export const Readonly: StoryObj = {
  args: {
    placeholder: 'Placeholder text',
    value: 'Value text',
    readonly: true,
  },
};

export const Require: StoryObj = {
  args: {
    placeholder: 'Placeholder text',
    require: true,
  },
};

export const Number: StoryObj = {
  args: {
    placeholder: 'Placeholder text',
    type: 'number',
    value: 123,
  },
};

export default meta;
