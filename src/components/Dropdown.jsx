import React, { useState } from "react";
import '../assets/styles/dropdown.css'
import arrow from'../assets/images/arrow.svg'


function Dropdown({titleValue, dropContent, widthClass, isList}) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? ( //Dropdown is open
    <div className={`collapse ${widthClass}`}>
      <div className="collapse--header" onClick={(e) => setIsOpen(false)}>
        {titleValue}
        <img src = {arrow} alt="arrow" className="arrow-up" />
      </div>
      <div className="collapse--expanded">
        {
          isList ? (
            <ul>
              {
                dropContent.map(content => 
                  <li key={content}>{content}</li> 
                )
              }
            </ul>
          ) : (
            <p>
              {dropContent}
            </p>
          )
        }
      </div>
    </div>
  ) : ( //Dropdown is closed
    <div className={`collapse ${widthClass}`}>
      <div className="collapse--header" onClick={(e) => setIsOpen(true)}>
        {titleValue}
        <img src = {arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Dropdown