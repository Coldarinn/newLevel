import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => (
  <Route
    key={route.path}
    path={route.path}
    element={route.authOnly ? (
      <RequireAuth>
        {route.element}
      </RequireAuth>
    ) : route.element}
  />
);

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">
      <ErrorBoundary>
        <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
      </ErrorBoundary>
    </div>
  </Suspense>
);
