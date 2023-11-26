import LoginForm from "components/LoginForm/LoginForm";
import { selectRegistrated } from "redux/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
const registrated = useSelector(selectRegistrated)

    if(registrated) return <Navigate to='/contacts' />
    return(
       <LoginForm/>
    )
};
