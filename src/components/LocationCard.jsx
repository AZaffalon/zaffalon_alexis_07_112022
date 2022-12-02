import React from "react"
import '../assets/styles/location-card.css'

function LocationCard({backgroundImage, titleValue}) {
  return(
    <div className="location-card" style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
      <div className="gradient"></div>
      <div className="title">{titleValue}</div>
    </div>
  )
}

export default LocationCard