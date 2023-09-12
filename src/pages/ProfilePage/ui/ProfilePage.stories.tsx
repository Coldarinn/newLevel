import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import ProfilePageComponent from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfilePageComponent>;

export default meta;

export const ProfilePage = () => <ProfilePageComponent />;
