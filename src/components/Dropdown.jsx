import React, { useState } from "react";
import '../assets/styles/dropdown.css'
import arrow from'../assets/images/arrow.svg'


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="collapse">
      <div className="collapse--header" onClick={(e) => setIsOpen(false)}>
        Fiabilité
        <img src = {arrow} alt="arrow" className="arrow-up" />
      </div>
      <div className="collapse--expanded">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse--header" onClick={(e) => setIsOpen(true)}>
        Fiabilité
        <img src = {arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Dropdown