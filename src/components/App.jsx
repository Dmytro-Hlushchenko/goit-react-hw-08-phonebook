import { useEffect, lazy} from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUserThunk } from "redux/auth/operations";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { selectIsRefreshing } from "redux/auth/selectors";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";


const HomePage = lazy(() => import("../pages/HomePage/"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"))


export const App = () => {
    const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();
    
     useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (<b>Loading......</b>) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};