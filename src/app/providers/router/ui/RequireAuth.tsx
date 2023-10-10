import { getUserAuthData, getUserRoles } from 'entities/User';
import { UserRole } from 'entities/User/model/types/user';
import { ReactNode, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';

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

  console.log('hasRequiredRoles: ', hasRequiredRoles);

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return (
    <>
      {children}
    </>
  );
};
