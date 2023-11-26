import { NavLink } from "react-router-dom"

export default function AuthMenu () {
  return (
    <ul>
      <li><NavLink className="NavLink" to="/register">Register</NavLink></li>
      <li><NavLink className="NavLink" to="/login">Log in</NavLink></li>
    </ul>)
};