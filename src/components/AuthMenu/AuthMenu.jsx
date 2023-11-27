import { NavLink } from "react-router-dom"

export default function AuthMenu () {
  return (
    <>
      <NavLink className="NavLink" to="/register">Register</NavLink>
      <NavLink className="NavLink" to="/login">Log in</NavLink>
    </>
     
  )
};