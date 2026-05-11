//HowWeWorkSection.jsx
import styles from "./HowWeWorkSection.module.css";


function HowWeWorkSection() {
  return (
    <section className={styles.how_we_work}>
      <div className={styles.overlay}>
        <div className={styles.section_header}>
          <span className={styles.orangeLine}></span>
          <span className={styles.section_title}>КАК МЫ РАБОТАЕМ</span>
          <span className={styles.orangeLine}></span>
        </div>

        <div className={styles.stepGroupTop}>
          <div className={`${styles.stepBlock} ${styles.block01}`}>
            <span className={styles.headingNumber}>01</span>
            <span className={styles.stepDescription}>
              Бесплатный выезд мастера на 
              
               объект для оценки работы
            </span>
          </div>

          <div className={`${styles.stepBlock} ${styles.block03}`}>
            <span className={styles.headingNumber}>03</span>
            <span className={styles.stepDescription}>
              Оформление и подписание  договора
            </span>
          </div>
        </div>
        <div className={styles.stepGroupTop}>
          <div className={`${styles.stepBlock} ${styles.block02}`}>
            <span className={styles.headingNumber}>02</span>
            <span className={styles.stepDescription}>
              Обсуждение работы с заказчиком
            </span>
          </div>

          <div className={`${styles.stepBlock} ${styles.block04}`}>
            <span className={styles.headingNumber}>04</span>
            <span className={styles.stepDescription}>
              Выполнение работ в  соответствии с пожеланиями {" "}
              заказчика
            </span>
          </div>
        </div>

        <div className={styles.block05}>
          <div className={styles.stepBlock}>
            <span className={styles.headingNumber}>05</span>
            <span className={styles.stepDescription}>
              Прием работы заказчиком  и окончательный расчет
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowWeWorkSection;
