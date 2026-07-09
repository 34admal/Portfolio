import React, { useState } from 'react';
import { priceData } from './priceData';
import css from './PriceComponent.module.css';

export const PriceComponent = () => {
  const categories = Object.keys(priceData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className={css.section}>
      <span className={css.title}>Прайс-лист на услуги</span>
      
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

