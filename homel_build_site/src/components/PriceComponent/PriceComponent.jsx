import React, { useState } from 'react';
import { priceData } from './priceData';
import css from './PriceComponent.module.css';

export const PriceComponent = () => {
  // Получаем массив ключей: ['отделка', 'строительство', 'кровля', 'сантехника', 'электрика']
  const categories = Object.keys(priceData);
  
  // Храним активную категорию (по умолчанию первая — 'отделка')
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className={css.section}>
      <span className={css.title}>Прайс-лист на услуги</span>
      
      {/* Общий контейнер плашки табов */}
      <div className={css.tabContainer}>
        {categories.map((category) => (
          <span
            key={category}
            className={`${css.tabItem} ${activeTab === category ? css.active : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PriceComponent;

