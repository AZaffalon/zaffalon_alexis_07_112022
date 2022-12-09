import React from "react";
import Dropdown from "../components/Dropdown";
import '../assets/styles/about.css'

function About() {
  return(
    <div className="about">
      <div className="bckg-about">
        <div className="slight-opacity"></div>
      </div>

      <main className="dropdown-list">
        <Dropdown widthClass={"width-100"} titleValue={"Fiabilité"} dropContent={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}/>
        <Dropdown widthClass={"width-100"} titleValue={"Respect"} dropContent={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
        <Dropdown widthClass={"width-100"} titleValue={"Service"} dropContent={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
        <Dropdown widthClass={"width-100"} titleValue={"Sécurité"} dropContent={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
      </main>
    </div>
  )
}

export default About