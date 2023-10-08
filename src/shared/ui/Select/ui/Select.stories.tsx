import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Select as SelectComponent } from './Select';

const meta = {
  title: 'shared/Select',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: SelectComponent,
  render: (args) => <SelectComponent {...args} />,
} satisfies Meta<typeof SelectComponent>;

export const Placeholder: StoryObj = {
  args: {
    additionalClasses: [],
    placeholder: 'Placeholder text',
    options: [
      {
        id: 'Option #1',
        value: 'Option #1',
      },
      {
        id: 'Option #2',
        value: 'Option #2',
      },
      {
        id: 'Option #3',
        value: 'Option #3',
      },
    ],
  },
};

export const Selected: StoryObj = {
  args: {
    additionalClasses: [],
    placeholder: 'Placeholder text',
    selectedValue: 'Option #2',
    options: [
      {
        id: 'Option #1',
        value: 'Option #1',
      },
      {
        id: 'Option #2',
        value: 'Option #2',
      },
      {
        id: 'Option #3',
        value: 'Option #3',
      },
    ],
  },
};

export const Readonly: StoryObj = {
  args: {
    additionalClasses: [],
    readonly: true,
    placeholder: 'Placeholder text',
  },
};

export default meta;
