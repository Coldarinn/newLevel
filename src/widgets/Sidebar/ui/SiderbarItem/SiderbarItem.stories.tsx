import { Meta } from '@storybook/react';
import MainIcon from 'shared/assets/icons/main.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import SidebarItemComponent from './SiderbarItem';

const meta = {
  title: 'widget/SidebarItem',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SidebarItemComponent>;

export default meta;

export const SidebarItem = () => (
  <SidebarItemComponent
    collapsed={false}
    item={{
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная',
    }}
  />
);
