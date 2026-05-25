import { useState } from "react";
import styles from "./OurServices.module.css";

function OurServices() {
  
  const [activeTab, setActiveTab] = useState("plumbing");

  return (
    <section className={styles.services}>
      {/* Галоўны загаловак секцыі */}
      <h2 className={styles.services__title}>НАШИ УСЛУГИ</h2>

      
      <div className={styles.services__wrapper}>
        
       
        <div className={styles.services__tabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === "finishing" ? styles.active : ""}`}
            onClick={() => setActiveTab("finishing")}
          >
            Отделочные работы
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === "construction" ? styles.active : ""}`}
            onClick={() => setActiveTab("construction")}
          >
            Строительство домов
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === "electricity" ? styles.active : ""}`}
            onClick={() => setActiveTab("electricity")}
          >
            Электрика
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === "plumbing" ? styles.active : ""}`}
            onClick={() => setActiveTab("plumbing")}
          >
            Сантехника
          </button>
        </div>

        
        <div className={styles.services__contentBox}>
          
          
          {activeTab === "plumbing" && (
            <div className={`${styles.infoBlock} ${styles.plumbingBox}`}>
              <h3 className={styles.infoTitle}>Сантехника</h3>
              <ul className={styles.infoList}>
                <li>Перенос и установка счетчиков</li>
                <li>Монтаж и ремонт водопровода</li>
                <li>Монтаж отопления</li>
                <li>Монтаж канализации</li>
              </ul>
            </div>
          )}

        
          {activeTab === "finishing" && (
            <div className={`${styles.infoBlock} ${styles.finishingBox}`}>
              <h3 className={styles.infoTitle}>Отделочные работы</h3>
              <ul className={styles.infoList}>
                <li>Электромонтажные и сантехнические работы</li>
                <li>Демонтажные работы</li>
                <li>Штукатурные работы</li>
                <li>Малярные работы</li>
                <li>Монтаж ГКЛ</li>
                <li>Облицовка стен и потолков</li>
                <li>Укладка плитки</li>
                <li>Укладка всех видов напольных покрытий</li>
              </ul>
            </div>
          )}

          
          {activeTab === "construction" && (
            <div className={`${styles.infoBlock} ${styles.constructionBox}`}>
              <h3 className={styles.infoTitle}>Строительство домов</h3>
              <ul className={styles.infoList}>
                <li>Профессиональная укладка блоков ГСБ</li>
                <li>Укладка кирпича</li>
                <li>Укладка пазогребневых плит</li>
                <li>Монтаж плит</li>
                <li>Монтаж перекрытий</li>
                <li>Монтаж балок и перемычек</li>
                <li>Изготовление монолитного пола</li>
                <li>Установка перегородок</li>
                <li>Установка вентиляционных каналов</li>
                <li>Кровельные работы любой сложности</li>
              </ul>
            </div>
          )}

         
          {activeTab === "electricity" && (
            <div className={`${styles.infoBlock} ${styles.electricityBox}`}>
              <h3 className={styles.infoTitle}>Электрика</h3>
              <ul className={styles.infoList}>
                <li>Замена розеток и выключателей</li>
                <li>Перенос розеток и выключателей</li>
                <li>Замена электропроводки</li>
                <li>Сборка электросчетчиков</li>
                <li>Установка электросчетчиков</li>
              </ul>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default OurServices;