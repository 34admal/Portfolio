import React, { useState, useEffect, useRef } from 'react';
import styles from './MySlider.module.css';

import { NextArrow, PrevArrow } from './CustomArrows';

import slide1 from './images/slides/1.png';
import slide2 from './images/slides/2.png';
import slide3 from './images/slides/3.png';
import slide4 from './images/slides/4.png';

const originalImages = [slide1, slide2, slide3, slide4];

const imagesWithClones = [
  slide4, 
  slide1,
  slide2,
  slide3,
  slide4,
  slide1  
];

const MySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const trackRef = useRef(null);
  const isLockRef = useRef(false);
  
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = () => {
    if (isLockRef.current) return;
    isLockRef.current = true;
    if (trackRef.current) trackRef.current.style.transition = 'transform 0.5s ease-in-out';
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isLockRef.current) return;
    isLockRef.current = true;
    if (trackRef.current) trackRef.current.style.transition = 'transform 0.5s ease-in-out';
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (originalIndex) => {
    if (isLockRef.current) return;
    isLockRef.current = true;
    if (trackRef.current) trackRef.current.style.transition = 'transform 0.5s ease-in-out';
    setCurrentIndex(originalIndex + 1);
  };

  const handleTransitionEnd = () => {
    if (!trackRef.current) return;

    if (currentIndex === imagesWithClones.length - 1) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-100%)`;
      setCurrentIndex(1);
    } 
    else if (currentIndex === 0) {
      const lastRealIndex = imagesWithClones.length - 2;
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${lastRealIndex * 100}%)`;
      setCurrentIndex(lastRealIndex);
    }

    isLockRef.current = false;
  };

  const checkSwipeDirection = () => {
    if (!startX.current || !endX.current) return;
    
    const diffX = startX.current - endX.current;
    const minSwipeDistance = 50;

    if (diffX > minSwipeDistance) {
      nextSlide();
    } else if (diffX < -minSwipeDistance) {
      prevSlide();
    }

    startX.current = 0;
    endX.current = 0;
  };

  // Выпраўлена: бярэм першы тач з агульнага масіва touches
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    checkSwipeDirection();
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); 
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    endX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    checkSwipeDirection();
  };

  const handleMouseLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    checkSwipeDirection();
  };

  let currentActiveDot = currentIndex - 1;
  if (currentIndex === 0) {
    currentActiveDot = originalImages.length - 1; 
  } else if (currentIndex === imagesWithClones.length - 1) {
    currentActiveDot = 0; 
  }

  return (
    <div className={styles.sliderFrameContainer}>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderWindow}>
          
          <div 
            ref={trackRef}
            className={styles.slidesTrack} 
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {imagesWithClones.map((img, index) => (
              <div key={index} className={styles.slide}>
                <img src={img} alt="slider item" className={styles.sliderImg} />
              </div>
            ))}
          </div>

          <div className={styles.arrowPrevWrapper}>
            <PrevArrow onClick={prevSlide} />
          </div>
          <div className={styles.arrowNextWrapper}>
            <NextArrow onClick={nextSlide} />
          </div>

          <div className={styles.dotsContainer}>
            {originalImages.map((_, index) => (
              <div 
                key={index} 
                className={`${styles.dotWrapper} ${index === currentActiveDot ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MySlider;
