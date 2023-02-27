import { NavLink as NavLinkRR } from "react-router-dom"

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRR { ...props } className={({ isActive }) => {
      return isActive ? 'is-active' : undefined
    }}
    to = {to}
    >
      {children}
    </NavLinkRR>
  )
}

export default NavLink