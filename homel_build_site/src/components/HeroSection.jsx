import React, { useState } from "react";
import MySlider from "./MySlider";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // 🎯 Через 2 секунды (2000 мс) возвращаем кнопку в исходное рабочее состояние
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

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
            <button 
              className={`${styles.button} ${clicked ? styles.buttonClicked : ""}`}
              onClick={handleClick}
              disabled={clicked}
            >
              {clicked ? "Заявка отправлена!" : "Получить консультацию"}
            </button>
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
