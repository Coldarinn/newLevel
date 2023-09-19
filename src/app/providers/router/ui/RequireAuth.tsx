import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactNode } from 'react';
import { getUserAuthData } from 'entities/User';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useAppSelector(getUserAuthData);

  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return (
    <div>
      {children}
    </div>
  );
};
