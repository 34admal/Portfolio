// components/CustomDots.jsx

import React from 'react';
import styles from './CustomDots.module.css'; // Импортируем стили для точек

// Компонент для одной точки навигации
function CustomDot(props) {
  const { onClick, index, active } = props; // Получаем свойства от react-slick

  return (
    <li
      className={`${styles.slickDot} ${active ? styles.slickDotActive : ''}`} // Применяем классы для активной/неактивной точки
      onClick={() => onClick(index)} // Вызываем onClick при клике на точку
      role="button" // Для доступности
      tabIndex="0" // Для доступности
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(index); }} // Обработка нажатия Enter
    >
      {/* Здесь может быть содержимое точки, если нужно, но для простого кружка не нужно */}
    </li>
  );
}

// Компонент, который будет рендерить все точки
function CustomDots(props) {
  const { dots } = props; // Получаем массив точек от react-slick

  // dots - это массив элементов, которые react-slick генерирует для каждой точки.
  // Нам нужно пройтись по ним и обернуть каждый в наш CustomDot.
  return (
    <ul className={styles.slickDots}> {/* Контейнер для всех точек */}
      {dots.map((dot, index) => (
        // dot - это уже готовый элемент точки от react-slick,
        // но мы хотим заменить его на наш CustomDot.
        // Поэтому мы передаем index и информацию об активности.
        // onClick мы берем из props, так как он передается в appendDots.
        <CustomDot
          key={index}
          index={index}
          active={dot.props.className.includes('slick-active')} // Проверяем, является ли точка активной
          onClick={() => props.onClick(index)} // Передаем функцию для переключения слайда
        />
      ))}
    </ul>
  );
}

export default CustomDots;
