import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import '../assets/styles/header.css'

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navlinks">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined}>Accueil</NavLink>
        <NavLink to="/About" className={({isActive}) => isActive ? "active" : undefined}>A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header