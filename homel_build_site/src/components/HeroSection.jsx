// components/HeroSection.jsx
import React from "react";
import MySlider from './MySlider';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <>
           <section>
        <div className={styles.main_content_block}>
          <div className={styles.slogan_block}>
            <span className={styles.construction_repair_gomel}>
              Строительство и ремонт в Гомеле
            </span>
            <span className={styles.future_together}>
              Надежное будущее строим вместе
            </span>
            <button>Получить консультацию</button>
          </div>

          <div className={styles.slider_container}>
            <MySlider/>
          </div>
        </div>
      </section>
    </>
  );
}


        /*{ <section className={styles.how_we_work}>
          <div className={styles.overlay}>
            <div className={styles.section_header}>
              <span className={styles.orangeLine}></span>
              <span className={styles.section_title}>КАК МЫ РАБОТАЕМ</span>
              <span className={styles.orangeLine}></span>
            </div>

            <div className={styles.steps_row}>
              
                <div className={`${styles.stepBlock} ${styles.block01}`}><span className={styles.headingNumber}>01</span>
                <span className={styles.stepDescription}>
                  Бесплатный выезд мастера на  объект для оценки работы
                </span></div>
                
              

              <div className={`${styles.stepBlock} ${styles.block03}`}>
                <span className={styles.headingNumber}>03</span>
                <span className={styles.stepDescription}>
                  Оформление и подписание <br /> договора
                </span>
              </div>
            </div>
            <div className={styles.steps_row} >
              <div className={`${styles.stepBlock} ${styles.block02}`} >
                <span className={styles.headingNumber}>02</span>
                <span className={styles.stepDescription}>
                  Обсуждение работы с заказчиком
                </span></div>
                
              

              <div className={`${styles.stepBlock} ${styles.block04}`}>
                <span className={styles.headingNumber}  >04</span>
                <span className={styles.stepDescription}>
                  Выполнение работ в <br/> соответствии с пожеланиями <br /> заказчика
                </span>
              </div>
            </div>
            <div className={styles.block_05}>
              <div className={styles.stepBlock}><span className={styles.headingNumber}>05</span>
              <span className={styles.stepDescription}>Прием работы заказчиком <br /> и окончательный расчет</span></div>
              
            </div>
          </div>
        </section> }
      
    </>
  );
}*/
export default HeroSection;