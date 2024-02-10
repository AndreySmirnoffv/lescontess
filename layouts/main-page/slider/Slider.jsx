import React, { useState, useEffect } from 'react'
import './slider.sass'

const Slider = ({ images, interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      }, interval);
  
      return () => {
        clearInterval(timer);
      };
    }, [currentImageIndex, images.length, interval]);
  
    return (
      <div className='slider'>
        <img src={images[currentImageIndex]} alt="Slider" />
      </div>
    );
  };
  
  export default Slider;