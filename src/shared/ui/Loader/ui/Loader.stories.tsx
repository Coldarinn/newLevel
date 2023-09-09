import { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Loader as LoaderComponent } from './Loader';

const meta = {
   title: 'shared/Loader',
   decorators: [DecoratedComponent],
   component: LoaderComponent,
   render: (args) => <LoaderComponent {...args} />,
} satisfies Meta<typeof LoaderComponent>;

export const Loader: StoryObj = {
   args: {
      additionalClasses: [],
   },
};

export default meta;
