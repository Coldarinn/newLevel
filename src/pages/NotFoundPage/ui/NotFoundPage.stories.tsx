import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { NotFoundPage as NotFoundPageComponent } from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotFoundPageComponent>;

export default meta;

export const NotFoundPage = () => <NotFoundPageComponent />;
