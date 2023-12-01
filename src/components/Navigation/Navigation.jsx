
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectRegistrated } from "redux/auth/selectors"



export const Navigation = () => {
    const registrated = useSelector(selectRegistrated)
    return (
        <>
        <p> PHONEBOOK</p>
            <NavLink to="/">Home</NavLink>
            {registrated && (<NavLink to="/contacts">Contacts</NavLink>)}
        </>
       
    )
}