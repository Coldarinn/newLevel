import { FC, lazy } from 'react';

import { AboutPageProps } from './AboutPage';

export const AboutPageAsync = lazy<FC<AboutPageProps>>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./AboutPage')), 400);
}));
