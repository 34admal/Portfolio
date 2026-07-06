import { useState } from "react";
import { priceData } from "./priceData";
import styles from "./PriceComponent.module.css";

function PriceComponent() {
  // Наш рабочий стейт для управления вкладками
  const [activeTab, setActiveTab] = useState("кровля");
  
  // Получаем список категорий для верхнего меню
  const categories = Object.keys(priceData);

  // Вытаскиваем массив работ строго для текущей активной вкладки
  const currentItems = priceData[activeTab] || [];

  return (
    <section className={styles.priceSection}>
     
        <span className={styles.title}>ПРАЙС-ЛИСТ НА УСЛУГИ</span>
        
     

      {/* Горизонтальное меню вкладок */}
      <div className={styles.tabsMenu}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.tabButton} ${activeTab === cat ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Динамическая таблица цен */}
       <div className={styles.tableContainer}>
        <table className={styles.priceTable}>
          <thead>
            <tr className={styles.thRow}>
              <th className={styles.thName}>Наименование работ</th>
              <th className={styles.thUnit}>Ед. измерения</th>
              <th className={styles.thPrice}>Цена от, руб</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className={styles.tableRow}>
                <td className={styles.itemName}>{item.name}</td>
                <td className={styles.itemUnit}>{item.unit}</td>
                <td className={styles.itemPrice}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PriceComponent;

