import { FC, lazy } from 'react';

import { MainPageProps } from './MainPage';

export const MainPageAsync = lazy<FC<MainPageProps>>(() => import('./MainPage'));
