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
        right: '10px', // Устанавливаем конкретный отступ
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '30px', // Уменьшаем размер контейнера, чтобы он соответствовал размеру стрелки
        height: '30px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {/* Пусто */}
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
        left: '10px', // Устанавливаем конкретный отступ
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '30px', // Уменьшаем размер контейнера
        height: '30px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {/* Пусто */}
    </div>
  );
}

export { NextArrow, PrevArrow };
