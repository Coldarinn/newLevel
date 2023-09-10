import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import MainPageComponent from './MainPage';

const meta = {
  title: 'pages/MainPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainPageComponent>;

export default meta;

export const MainPage = () => <MainPageComponent />;
