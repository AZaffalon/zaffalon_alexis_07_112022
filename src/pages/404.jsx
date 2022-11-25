import React from "react";
import '../assets/styles/404.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return(
    <div className="not-found">
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default NotFound