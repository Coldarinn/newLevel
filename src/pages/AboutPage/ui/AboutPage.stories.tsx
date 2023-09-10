import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import AboutPageComponent from './AboutPage';

const meta = {
   title: 'pages/AboutPage',
   decorators: [DecoratedComponent],
   parameters: {
      layout: 'fullscreen',
   },
} satisfies Meta<typeof AboutPageComponent>;

export default meta;

export const AboutPage = () => <AboutPageComponent />;
