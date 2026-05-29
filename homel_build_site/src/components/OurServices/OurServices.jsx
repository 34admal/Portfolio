import { useState } from "react";
import styles from "./OurServices.module.css";
import { servicesData } from "./servicesData"; 

function OurServices() {
  const [activeTab, setActiveTab] = useState("plumbing");

  return (
    <section className={styles.services}>
      <span className={styles.services__title}>НАШИ УСЛУГИ</span>
      <span className={styles.services__line}></span>

      <div className={styles.services__board}>
        
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className={styles.services__tabs}>
          <div className={`${styles.tabCard} ${activeTab === "finishing" ? styles.active : ""}`} onClick={() => setActiveTab("finishing")}>Отделочные работы</div>
          <div className={`${styles.tabCard} ${activeTab === "construction" ? styles.active : ""}`} onClick={() => setActiveTab("construction")}>Строительство домов</div>
          <div className={`${styles.tabCard} ${activeTab === "electricity" ? styles.active : ""}`} onClick={() => setActiveTab("electricity")}>Электрика</div>
          <div className={`${styles.tabCard} ${activeTab === "plumbing" ? styles.active : ""}`} onClick={() => setActiveTab("plumbing")}>Сантехника</div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className={styles.services__contentBox}>
 
  <span className={styles.infoTitle}>{servicesData[activeTab].title}</span>
  <ul className={styles.infoList}>
    {servicesData[activeTab].list.map((item, index) => (
      <li key={index} className={styles.infoItem}>{item}</li>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
}

export default OurServices;

