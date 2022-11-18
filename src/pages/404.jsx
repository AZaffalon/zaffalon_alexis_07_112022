import React from "react";
import '../assets/styles/404.css'

function NotFound() {
  return(
    <div className="not-found">
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <a href="#">Retourner sur la page d’accueil</a>
    </div>
  )
}

export default NotFound