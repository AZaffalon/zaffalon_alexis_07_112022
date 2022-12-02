import React from "react";
import '../assets/styles/tag.css'

function Tag({tagValue}) {
  return(
    <div className="tag">
      {tagValue}
    </div>
  )
}

export default Tag