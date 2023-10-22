import type { Preview } from '@storybook/react';

import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Тема',
    description: 'Тема',
    defaultValue: Theme.DARK,
    toolbar: {
      icon: 'contrast',
      items: [
        {
          title: 'Светлая тема',
          value: Theme.LIGHT,
        },
        {
          title: 'Тёмная тема',
          value: Theme.DARK,
        },
        {
          title: 'Синяя тема',
          value: Theme.BLUE,
        },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
