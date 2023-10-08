import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { EditableProfileCardHeader as EditableProfileCardHeaderComponent } from './EditableProfileCardHeader';

const meta = {
  title: 'features/EditableProfileCardHeader',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: EditableProfileCardHeaderComponent,
  render: (args) => <EditableProfileCardHeaderComponent {...args} />,
} satisfies Meta<typeof EditableProfileCardHeaderComponent>;

export const Readonly: StoryObj = {
  args: {
    readonly: true,
  },
};

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
};

export default meta;
