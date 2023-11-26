import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectRegistrated } from 'redux/selectors';


export const PrivateRoute =({children, redirectTo='/'})=>{
    const registrated = useSelector(selectRegistrated)
    return registrated ? children : <Navigate to={redirectTo} />
}