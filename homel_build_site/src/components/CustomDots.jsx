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
      {}
    </li>
  );
}


function CustomDots(props) {
  const { dots } = props; 

 
  return (
    <ul className={styles.slickDots}> {}
      {dots.map((dot, index) => (
      
        <CustomDot
          key={index}
          index={index}
          active={dot.props.className.includes('slick-active')} 
          onClick={() => props.onClick(index)} 
        />
      ))}
    </ul>
  );
}

export default CustomDots;
