import { useState, useEffect } from "react";
import { circleData } from "./aboutData";
import styles from "./AboutUs.module.css";

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = circleData[currentIndex];
   useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % circleData.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.leftContent}>
          <span className={styles.title}>О НАС</span>
          <div className={styles.item}>
            <span className={styles.text}>Качественное проведение работ</span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <span className={styles.text}>Обсуждение работы на каждом этапе</span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <span className={styles.text}>Профессиональный инструмент</span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <span className={styles.text}>Начинаем работу без аванса</span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <span className={styles.text}>Доступные цены</span>
            <span className={styles.line}></span>
          </div>
        </div>
        <div className={styles.rightContent}>
  <span className={styles.circleTop}>{currentData.top}</span>
  <span className={styles.circleNumber}>{currentData.number}</span>
  <span className={styles.circleBottom}>{currentData.bottom}</span>
</div>
      </div>
    </section>
  );
}
export default AboutUs;
