import { ReactNode, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';

interface RequireAuthProps {
  children: ReactNode;
  roles?: UserRole[]
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, roles } = props;

  const auth = useAppSelector(getUserAuthData);

  const location = useLocation();

  const userRoles = useAppSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return (
    <>
      {children}
    </>
  );
};
