import React from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import '../assets/styles/header.css'

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navlinks">
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header