import { getUserAuthData } from 'entities/User';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useAppSelector(getUserAuthData);

  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return (
    <>
      {children}
    </>
  );
};
