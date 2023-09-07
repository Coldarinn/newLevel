import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Sidebar as SidebarComponent } from './Sidebar';

const meta = {
   title: 'widget/Sidebar',
   decorators: [DecoratedComponent],
} satisfies Meta<typeof SidebarComponent>;

export default meta;

export const Sidebar = () => <SidebarComponent />;
