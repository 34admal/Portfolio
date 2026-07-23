import React from 'react';
import styles from './ContactComponent.module.css';
import bgWorkers from './images/bg-workers.png';
import ContactForm from './ContactForm';

function ContactComponent() {
  return (
    <section id="contacts" className={styles.wrapper}>
      <span className={styles.title}>СВЯЖИТЕСЬ С НАМИ ИЛИ ОСТАВЬТЕ ЗАЯВКУ</span>
      
      <div className={styles.contentBlock}>
        <div className={styles.workersColumn}>
          <img src={bgWorkers} className={styles.workersImg} alt="Рабочие" />
        </div>
        <div className={styles.formColumn}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
