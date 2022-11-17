import React from "react"
import Logo from "./Logo"
import '../assets/styles/header.css'

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navlinks">
        <a href="#">Accueil</a>
        <a href="#">A Propos</a>
      </nav>
    </header>
  )
}

export default Header