// React
import React from "react"
import { Link } from 'react-router-dom'
// Styles
import '../assets/styles/location-card.css'

function LocationCard({backgroundImage, titleValue, locationId}) {
  return(
    <Link to={`/fiche-logement/${locationId}`} className="location-link">
      <div className="location-card" style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="gradient"></div>
        <div className="title">{titleValue}</div>
      </div>
    </Link>
  )
}

export default LocationCard