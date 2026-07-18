import React from 'react';
import css from './ContactComponent.module.css';
import bgWorkers from './images/bg-workers.png';

function ContactComponent() {
  return (
    <section className={css.wrapper}>
      <span className={css.title}>СВЯЖИТЕСЬ С НАМИ ИЛИ ОСТАВЬТЕ ЗАЯВКУ</span>
      
      <div className={css.contentBlock}>
        <div className={css.workersColumn}>
          <img src={bgWorkers} className={css.workersImg} alt="Рабочие" />
        </div>
        
        <div className={css.formColumn}>
          {/* Контент формы */}
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
