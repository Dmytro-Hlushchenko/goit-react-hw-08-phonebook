import  RegistrationForm  from "components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { selectRegistrated } from "redux/selectors";

export default function  RegisterPage() {
    // const registrated = useSelector(selectRegistrated)

    // if(registrated) return <Navigate to='/contacts' />

    return (
        <div>
            <RegistrationForm/>
        </div>
    )
};
