import React, { useState } from 'react';
import { priceData } from './priceData';
import styles from './PriceComponent.module.css';

export const PriceComponent = () => {
  const categories = Object.keys(priceData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="prices" className={styles.section}>
      <span className={styles.title}>Прайс-лист на услуги</span>
      
      <div className={styles.mainWrapper}>
        <div className={styles.tabContainer}>
          {categories.map((category) => (
            <span
              key={category}
              className={`${styles.tabItem} ${activeTab === category ? styles.active : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>

        <div className={styles.tableHeader}>
          <span className={styles.headerCell}>
            <span className={styles.cellText}>Наименование работ</span>
          </span>
          <span className={styles.headerCell}>Ед. измерения</span>
          <span className={styles.headerCell}>Цена от, руб</span>
        </div>

        {/* Список строк таблицы на основе активного таба */}
        <div className={styles.tableBody}>
          {priceData[activeTab].map((row) => (
            <div key={row.id} className={styles.tableRow}>
              <div className={styles.nameCell}>
                <span className={styles.rowCellText}>{row.name}</span>
              </div>
              <div className={styles.unitCell}>{row.unit}</div>
              <div className={styles.priceCell}>{row.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <a
          href="files/price-list.csv"
          download="Прайс-лист_на_услуги.csv"
          className={styles.downloadBtn}
        >
          Скачать весь прайс
        </a>
      </div>
    </section>
  );
};

export default PriceComponent;
