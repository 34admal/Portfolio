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
      {/* Шапка блока */}
      <div className={styles.headerRow}>
        <span className={`${styles.line} ${styles.lineLeft}`} />
        <span className={styles.title}>ПРАЙС-ЛИСТ</span>
        <span className={`${styles.line} ${styles.lineRight}`} />
      </div>

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
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className={styles.tableRow}>
                <td className={styles.itemName}>{item.name}</td>
                <td className={styles.itemUnit}>{item.unit}</td>
                <td className={styles.itemPrice}>{item.price} руб.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PriceComponent;

