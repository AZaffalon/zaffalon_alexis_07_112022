import React from "react";
import '../assets/styles/404.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return(
    <main className="not-found">
      <span>404</span>
      <div class="oups">
        <span>Oups! La page que</span>
        <span> vous demandez n'existe pas.</span> 
      </div>

      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default NotFound