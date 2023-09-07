import type { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
   title: 'shared/AppLink',
   tags: ['autodocs'],
   decorators: [DecoratedComponent],
} satisfies Meta<typeof AppLink>;

const Template = (args: any) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   children: 'AppLink text',
   theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});

Secondary.args = {
   children: 'AppLink text',
   theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});

Red.args = {
   children: 'AppLink text',
   theme: AppLinkTheme.RED,
};

export default meta;
