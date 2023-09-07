import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Loader as LoaderComponent } from './Loader';

const meta = {
   title: 'shared/Loader',
   decorators: [DecoratedComponent],
} satisfies Meta<typeof LoaderComponent>;

export default meta;

export const Loader = () => <LoaderComponent />;
