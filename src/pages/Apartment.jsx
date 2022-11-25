import React from "react";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import '../assets/styles/apartment.css'
import starGrey from '../assets/images/star-grey.svg'
import starRed from '../assets/images/star-red.svg'

function Apartment() {
  return (
    <div className="apartment">
      <div className="carousel"></div>
      <h2>Paris center, on the romantic Canal Saint-Martin</h2>
      <span>Paris, Île-de-France</span>

      <div className="align-tags">
        <Tag />
        <Tag />
        <Tag />
      </div>

      <div className="align">
        <div className="star-container">
          <img src= {starRed} alt="Star red" />
          <img src= {starRed} alt="Star red" />
          <img src= {starRed} alt="Star red" />
          <img src= {starGrey} alt="Star grey" />
          <img src= {starGrey} alt="Star grey" />
        </div>

        <div className="name-picture">
          <span>Alexandre Dumas</span>
          <div className="picture"></div>
        </div>
      </div>

      <div className="align-dropdown">
        <Dropdown />
        <Dropdown />  
      </div>
    </div>
  )
}

export default Apartment