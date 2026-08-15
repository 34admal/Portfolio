// components/HeroSection.jsx
import React from "react";
import MySlider from "./MySlider";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.main_content_block}>
          <div className={styles.slogan_block}>
            <div className={styles.construction_repair_gomel}>
              {"Строительство и\u00A0ремонт в Гомеле"}
            </div>
            <span className={styles.future_together}>
              Надежное будущее строим вместе
            </span>
            <button className={styles.button}>Получить консультацию</button>
          </div>

          <div className={styles.slider_container}>
            <MySlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
