import React from "react";
import Dropdown from "../components/Dropdown";
import '../assets/styles/about.css'

function About() {
  return(
    <>
      <div className="bckg-about">
          <div className="slight-opacity"></div>
      </div>

      <main className="dropdown-list">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </main>
    </>
  )
}

export default About