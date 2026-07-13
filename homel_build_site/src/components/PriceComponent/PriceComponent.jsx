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
          <span className={css.headerCell}>
  <span className={css.cellText}>Наименование работ</span>
</span>
          <span className={css.headerCell}>Ед. измерения</span>
          <span className={css.headerCell}>Цена от, руб</span>
        </div>

        {/* Список строк таблицы на основе активного таба */}
<div className={css.tableBody}>
  {priceData[activeTab].map((row) => (
    <div key={row.id} className={css.tableRow}>
      <div className={css.nameCell}>
        <span className={css.rowCellText}>{row.name}</span>
      </div>
      <div className={css.unitCell}>{row.unit}</div>
      <div className={css.priceCell}>{row.price}</div>
    </div>
  

          ))}
        </div>

      </div>
      <div className={css.btnWrapper}>
  <a 
    href="files/price-list.csv" 
    download="Прайс-лист_на_услуги.csv" 
    className={css.downloadBtn}
  >
    Скачать весь прайс
  </a>
</div>

    </section>
  );
};

export default PriceComponent;