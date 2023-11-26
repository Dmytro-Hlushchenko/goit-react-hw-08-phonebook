import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/selectors";
import defaultAvatar from "defaulAvatar.png";
import { logOutUserThunk } from "redux/operations";


export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(selectUser)
    const avatar = defaultAvatar;

    const handleLogOut =()=>{
        dispatch(logOutUserThunk());
}
   
    return (
        <div>
            <img src={avatar} width="56" alt="" />
            <p>Welcome, {name.name}</p>
            <button onClick={handleLogOut} >Logout</button>
    </div>)
};