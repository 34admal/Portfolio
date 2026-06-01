import { useState } from "react";
import styles from "./OurServices.module.css";
import { servicesData } from "./servicesData";
import iconFinishing from "./image_OurServices/finishing-icon.png";
import iconConstruction from "./image_OurServices/construction-icon.png";
import iconElectricity from "./image_OurServices/electricity-icon.png";
import iconPlumbing from "./image_OurServices/plumbing-icon.png"; 


function OurServices() {
  const [activeTab, setActiveTab] = useState("plumbing");

  return (
    <section className={styles.services}>
      <span className={styles.services__title}>НАШИ УСЛУГИ</span>
      <span className={styles.services__line}></span>

      <div className={styles.services__board}>
        
        {/* ЛЕВАЯ ЧАСТЬ */}
<div className={styles.services__tabs}>
  <div className={`${styles.tabCard} ${activeTab === "finishing" ? styles.active : ""}`} onClick={() => setActiveTab("finishing")}>
    Отделочные работы
    <img src={iconFinishing} className={styles.tabIcon} alt="" />
  </div>
  
  <div className={`${styles.tabCard} ${activeTab === "construction" ? styles.active : ""}`} onClick={() => setActiveTab("construction")}>
    Строительство домов
    <img src={iconConstruction} className={styles.tabIcon} alt="" />
  </div>
  
  <div className={`${styles.tabCard} ${activeTab === "electricity" ? styles.active : ""}`} onClick={() => setActiveTab("electricity")}>
    Электрика
    <img src={iconElectricity} className={styles.tabIcon} alt="" />
  </div>
  
  <div className={`${styles.tabCard} ${activeTab === "plumbing" ? styles.active : ""}`} onClick={() => setActiveTab("plumbing")}>
    Сантехника
    <img src={iconPlumbing} className={styles.tabIcon} alt="" />
  </div>
</div>




       
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

