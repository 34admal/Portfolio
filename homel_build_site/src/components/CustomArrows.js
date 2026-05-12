// components/CustomArrows.jsx
import React from 'react';
import styles from './CustomArrows.module.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customNextArrowContainer}`}
      style={{
        ...style,
        position: 'absolute',
        right: '10px', 
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '30px', 
        height: '30px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {}
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customPrevArrowContainer}`}
      style={{
        ...style,
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '30px', 
        height: '30px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {}
    </div>
  );
}

export { NextArrow, PrevArrow };
