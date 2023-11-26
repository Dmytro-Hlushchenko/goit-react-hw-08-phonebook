import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk, refreshUserThunk } from "redux/operations";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Navigation } from "./Navigation/Navigation";
import  AuthMenu  from "./AuthMenu/";
import UserMenu from "./UserMenu/";
import { Header } from "./App.styled";
import { selectRegistrated, selectToken } from "redux/selectors";


const HomePage = lazy(() => import("../pages/HomePage/"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"))


export const App = () => {
    const registrated = useSelector(selectRegistrated);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    
     useEffect(() => {
    if (!token || registrated) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch, registrated]);

    return (
        <div>
            <Header>
                <Navigation />
                {registrated ? <UserMenu /> : <AuthMenu />}
            </Header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/contacts' element={
                        <PrivateRoute redirectTo='/login'>
                            <ContactsPage />
                        </PrivateRoute>
                    } />
                </Routes>
            </main>
        </div>
    );
};