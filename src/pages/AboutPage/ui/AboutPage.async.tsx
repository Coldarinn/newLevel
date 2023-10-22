import { FC, lazy } from 'react';

import { AboutPageProps } from './AboutPage';

export const AboutPageAsync = lazy<FC<AboutPageProps>>(
  () => import('./AboutPage'),
);
