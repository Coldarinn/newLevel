import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { AppLink as AppLinkComponent, AppLinkTheme } from './AppLink';

const meta = {
   title: 'shared/AppLink',
   decorators: [DecoratedComponent],
   parameters: {
      layout: 'fullscreen',
   },
   component: AppLinkComponent,
   render: (args) => <AppLinkComponent {...args} />,
} satisfies Meta<typeof AppLinkComponent>;

export const Primary: StoryObj = {
   args: {
      theme: AppLinkTheme.PRIMARY,
      children: 'Link text',
      additionalClasses: [],
   },
};

export const Secondary: StoryObj = {
   args: {
      theme: AppLinkTheme.SECONDARY,
      children: 'Link text',
      additionalClasses: [],
   },
};

export const Red: StoryObj = {
   args: {
      theme: AppLinkTheme.RED,
      children: 'Link text',
      additionalClasses: [],
   },
};

export default meta;
