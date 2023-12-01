import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import defaultAvatar from "defaulAvatar.png";
import { logOutUserThunk } from "redux/auth/operations";
import {ContainerStyled, StyledBtn } from "./UserMenu.styled"


export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(selectUser)
    const avatar = defaultAvatar;

    const handleLogOut =()=>{
        dispatch(logOutUserThunk());
}
   
    return (
        <ContainerStyled>
            <img src={avatar} width="56" alt="" />
            <p>Welcome, {name.name}</p>
            <StyledBtn onClick={handleLogOut} >Logout</StyledBtn>
        </ContainerStyled>)
};