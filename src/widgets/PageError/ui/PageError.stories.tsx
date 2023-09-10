import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { PageError as PageErrorComponent } from './PageError';

const meta = {
   title: 'widget/PageError',
   decorators: [DecoratedComponent],
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof PageErrorComponent>;

export default meta;

export const PageError = () => <PageErrorComponent />;
