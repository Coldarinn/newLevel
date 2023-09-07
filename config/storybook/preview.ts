import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

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
      defaultValue: Theme.LIGHT,
      toolbar: {
         icon: 'contrast',
         items: [{ title: 'Светлая тема', value: Theme.LIGHT }, { title: 'Тёмная тема', value: Theme.DARK }],
         dynamicTitle: true,
      },
   },
};

export default preview;
