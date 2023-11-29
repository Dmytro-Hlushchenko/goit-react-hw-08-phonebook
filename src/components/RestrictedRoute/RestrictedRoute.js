import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectRegistrated } from 'redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {

 const registrated = useSelector(selectRegistrated);

  return registrated ? <Navigate to={redirectTo} /> : Component;
};
