import React, { useState } from "react";
import '../assets/styles/dropdown.css'
import arrow from'../assets/images/arrow.svg'


function Dropdown({titleValue, dropContent, widthClass}) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className={`collapse ${widthClass}`}>
      <div className="collapse--header" onClick={(e) => setIsOpen(false)}>
        {titleValue}
        <img src = {arrow} alt="arrow" className="arrow-up" />
      </div>
      <div className="collapse--expanded">
        <p>
          {dropContent}
        </p>
      </div>
    </div>
  ) : (
    <div className={`collapse ${widthClass}`}>
      <div className="collapse--header" onClick={(e) => setIsOpen(true)}>
        {titleValue}
        <img src = {arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Dropdown