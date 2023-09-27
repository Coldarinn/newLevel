import { FC, lazy } from 'react';

import { MainPageProps } from './MainPage';

export const MainPageAsync = lazy<FC<MainPageProps>>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./MainPage')), 400);
}));
