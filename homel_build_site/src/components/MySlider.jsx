// components/MySlider.jsx

import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { NextArrow, PrevArrow } from './CustomArrows';


import CustomDots from './CustomDots';


import styles from './MySlider.module.css';

import slide1 from './images/slides/1.png';
import slide2 from './images/slides/2.png';
import slide3 from './images/slides/3.png';
import slide4 from './images/slides/4.png';

const MySlider = () => {
  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    appendDots: (dots) => (
      
      <CustomDots dots={dots} onClick={(currentSlide) => sliderRef.current?.slickGoTo(currentSlide)} />
    ),

    customPaging: (i) => (
      <div
        style={{
          width: "100%",
          height: "100%",
          color: "transparent",
        }}
      >
        {i}
      </div>
    ),
  };

  
  useEffect(() => {
   
  }, []);

  return (
    <div className={styles.sliderWrapper} style={{ position: 'relative', overflow: 'hidden' }}>
      {}
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={slide1} alt="Слайд 1" />
        </div>
        <div>
          <img src={slide2} alt="Слайд 2" />
        </div>
        <div>
          <img src={slide3} alt="Слайд 3" />
        </div>
        <div>
          <img src={slide4} alt="Слайд 4" />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;



