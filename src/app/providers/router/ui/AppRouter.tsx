import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { ErrorBoundary } from '../../ErrorBoundary';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => (
  <Route
    key={route.path}
    path={route.path}
    element={route.authOnly ? (
      <RequireAuth roles={route.roles}>
        {route.element}
      </RequireAuth>
    ) : route.element}
  />
);

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <ErrorBoundary>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </ErrorBoundary>
  </Suspense>
);
