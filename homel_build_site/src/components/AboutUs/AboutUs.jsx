import styles from "./AboutUs.module.css";

function AboutUs() {
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
          {/* Тут будут наши круги */}
        </div>

      </div>
    </section>
  );
}

export default AboutUs;


