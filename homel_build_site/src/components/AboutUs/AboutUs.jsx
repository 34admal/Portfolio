import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        
        {/* Объединяем всю левую часть в один блок */}
        <div className={styles.leftContent}>
          <span className={styles.title}>О НАС</span>
          
          <ul className={styles.list}>
            <li className={styles.listItem}>Качественное проведение работ</li>
            <li className={styles.listItem}>Обсуждение работы на каждом этапе</li>
            <li className={styles.listItem}>Профессиональный инструмент</li>
            <li className={styles.listItem}>Начинаем работу без аванса</li>
            <li className={styles.listItem}>Доступные цены</li>
          </ul>
        </div>

        {/* Правая часть (пока просто заглушка для круга) */}
        <div className={styles.rightContent}>
          {/* Тут будут наши круги */}
        </div>

      </div>
    </section>
  );
}

export default AboutUs;


