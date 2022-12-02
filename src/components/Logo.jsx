import React from "react"
import '../assets/styles/logo.css'
import kLetter from '../assets/images/k_letter.svg'
import sLetter from '../assets/images/s_letter.svg'
import aLetter from '../assets/images/a_letter.svg'
import roof from '../assets/images/roof.svg'
import door from '../assets/images/door.svg'

function Logo() {
  return (
    <div className="logo">
      <img src= {kLetter} alt="letter K" />
      <div className="logo__home">
        <img src= {roof} alt="roof" />
        <img src= {door} alt="door" className="door"/>
      </div>
      <img src= {sLetter} alt="letter S" />
      <img src= {aLetter} alt="letter A" />
    </div>
  )
}

export default Logo