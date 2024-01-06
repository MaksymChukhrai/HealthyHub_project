import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Redux/userAuth/hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const { isLoggedIn, isRefreshing, isVerify } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing && !isVerify;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};
