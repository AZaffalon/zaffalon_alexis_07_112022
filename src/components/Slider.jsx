import React, { useState } from 'react'
import '../assets/styles/slider.css'
import arrow from'../assets/images/arrow.svg'

export default function Slider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return length === 1 ? (
    <div className='carousel'>
      <div className="slide-image">
        <img src={slides} alt="" />
      </div>
    </div>
  ) : (
    <div className='carousel'>
      <img src = {arrow} alt="arrow" className="arrow-left" onClick={() => prevSlide()} />
      <img src = {arrow} alt="arrow" className="arrow-right" onClick={() => nextSlide()} />
      {
        slides.map((slide, index) => {
          return (
            <div key={index} className="slide-image">
              {index === current && (
                <img src={slide} alt="" />
              )}
            </div>
          );
        })
      }
    </div>
  )
}
