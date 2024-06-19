import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiplePictures = pictures.length > 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <img src={picture} alt={`Slide ${index + 1}`} className="slide-image" />
            )}
          </div>
        ))}
      </div>
      {hasMultiplePictures && (
        <>
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
          <div className="slide-numbering">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;