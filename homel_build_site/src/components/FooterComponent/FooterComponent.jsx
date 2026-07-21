import React from 'react';
import styles from './FooterComponent.module.css'; 
import phoneIcon from './images/icon-phone.png';
import docIcon from './images/icon-doc.png';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      {/* Левая колонка */}
      <div className={styles.columnLeft}>
        <div className={styles.phoneRow}>
          <img src={phoneIcon} alt="Телефон" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>+375 (29) 111-11-11</span>
        </div>
        
        <div className={styles.emailRow}>
          <img src={docIcon} alt="Документ" className={styles.docIcon} />
          <span className={styles.emailText}>stroyka@gmail.com</span>
        </div>
      </div>

      {/* Центральная колонка */}
      <div className={ styles.columnCenter}>
        <span className={styles.copyright}>© Safehouse 2021</span>
      </div>

      {/* Правая колонка */}
      <div className={styles.columnRight}>
        <span className={styles.owner}>ИП Костин А.Н.</span>
        <span className={styles.unp}>УНП 111111111</span>
        <span className={styles.address}>Юридический адрес</span>
      </div>
    </footer>
  );
}

export default FooterComponent;
