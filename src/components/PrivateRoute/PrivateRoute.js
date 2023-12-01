import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectRegistrated } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const registrated = useSelector(selectRegistrated)
  const shouldRedirect = !registrated;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
