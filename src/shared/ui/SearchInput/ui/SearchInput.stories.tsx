import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { SearchInput as SearchInputComponent } from './SearchInput';

const meta = {
  title: 'shared/SearchInput',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: SearchInputComponent,
  render: (args) => <SearchInputComponent {...args} />,
} satisfies Meta<typeof SearchInputComponent>;

export const Placeholder: StoryObj = {
  args: {
    placeholder: 'Placeholder text',
    additionalClasses: [],
  },
};

export const Value: StoryObj = {
  args: {
    value: 'Search text',
    placeholder: 'Placeholder text',
    additionalClasses: [],
  },
};

export default meta;
