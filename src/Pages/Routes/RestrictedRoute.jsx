import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Redux/userAuth/hooks/useAuth';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/main',
}) => {
  const location = useLocation();
  const { isLoggedIn, isVerify } = useAuth();

  return isLoggedIn && isVerify ? (
    <Navigate to={location.state?.from || redirectTo} />
  ) : (
    Component
  );
};
