import {NavLink} from "react-router"
import {navLinkActiveClass} from "../styles/common"
export default function Header(){
  return (
    <nav className="flex justify-between px-5 py-5 bg-pink-500 h-15">
      <p>LOGO</p>
      <ul className="flex gap-10">
        <li><NavLink to="" className={navLinkActiveClass}>Home </NavLink></li>
        <li><NavLink to="register" className={navLinkActiveClass}>Register </NavLink></li>
        <li><NavLink to="login" className={navLinkActiveClass}>Login </NavLink></li>
      </ul>
    
    </nav>
    
  )
}