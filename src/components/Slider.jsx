// React
import React, { useState } from 'react'
// Styles and images
import '../assets/styles/slider.css'
import arrow from'../assets/images/arrow.svg'

export default function Slider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  /**
   * Instantiate carousel's images and setting src property to start preloading them
   */
  const images = slides
  for (const image of images) {
    const imageElement = new Image();
    imageElement.src = image;
  }

  // Carousel right button
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Carousel left button
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return length === 1 ? ( // If only 1 image in carousel
    <div className='carousel'>
      <div className="slide-image">
        <img src={slides} alt="" />
      </div>
    </div>
  ) : ( //if more than 1 image in carousel
    <div className='carousel'>
      <img src = {arrow} alt="arrow" className="arrow-left" onClick={() => prevSlide()} />
      <img src = {arrow} alt="arrow" className="arrow-right" onClick={() => nextSlide()} />
      {
        images.map((image, index) => {
          return (
            <div key={image} className="slide-image">
              {index === current && (
                <>
                  <img src={image} alt="" />
                  <span className='current-img-counter'>
                    {`${current + 1}/${length}`}
                  </span>
                </>
              )}
            </div>
          );
        })
      }
    </div>
  )
}
