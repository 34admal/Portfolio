import React, { useState } from 'react';
import { priceData } from './priceData';
import css from './PriceComponent.module.css';

export const PriceComponent = () => {
  const categories = Object.keys(priceData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className={css.section}>
      <span className={css.title}>Прайс-лист на услуги</span>
      
      {/* Возвращаем главный мега-контейнер */}
      <div className={css.mainWrapper}>
        
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

        <div className={css.tableHeader}>
          <span className={css.headerCell}>Наименование работ</span>
          <span className={css.headerCell}>Ед. измерения</span>
          <span className={css.headerCell}>Цена от, руб</span>
        </div>

        {/* Список строк таблицы на основе активного таба */}
        <div className={css.tableBody}>
          {priceData[activeTab].map((row) => (
            <div key={row.id} className={css.tableRow}>
              <span className={css.rowCell}>{row.name}</span>
              <span className={css.rowCell}>{row.unit}</span>
              <span className={css.rowCell}>{row.price}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PriceComponent;