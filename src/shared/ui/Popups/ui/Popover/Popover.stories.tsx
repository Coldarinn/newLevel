import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Button } from '../../../Button';
import { Popover as PopoverComponent } from './Popover';

const trigger = () => <Button>popover trigger</Button>;

const content = () => (
  <div style={{ width: 200 }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus
    minus consequatur dolor autem maiores neque? Delectus iure reprehenderit
    nostrum!
  </div>
);

const meta = {
  title: 'shared/Popups/Popover',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: PopoverComponent,
  render: (args) => <PopoverComponent {...args} />,
} satisfies Meta<typeof PopoverComponent>;

export const BottomLeft: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'bottom left',
    trigger,
    children: content,
  },
};

export const BottomRight: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'bottom right',
    trigger,
    children: content,
  },
};

export const TopLeft: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'top left',
    trigger,
    children: content,
  },
};

export const TopRight: StoryObj = {
  args: {
    initialStatus: true,
    direction: 'top right',
    trigger,
    children: content,
  },
};

export const Closed: StoryObj = {
  args: {
    direction: 'bottom left',
    trigger,
    children: content,
  },
};

export default meta;
