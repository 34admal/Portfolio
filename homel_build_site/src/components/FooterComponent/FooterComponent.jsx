import React from 'react';
import css from './FooterComponent.module.css';
import phoneIcon from './images/icon-phone.png';
import docIcon from './images/icon-doc.png';

function FooterComponent() {
  return (
    <footer className={css.footer}>
      {/* Левая колонка — контакты */}
      <div className={css.columnLeft}>
        <div className={css.row}>
          <img src={phoneIcon} alt="" className={css.icon} />
          <span>+375 (29) 111-11-11</span>
        </div>
        <div className={css.row}>
          <img src={docIcon} alt="" className={css.icon} />
          <span>stroyka@gmail.com</span>
        </div>
      </div>

      {/* Центральная колонка — копирайт */}
      <div className={css.columnCenter}>
        <span>© Safehouse 2021</span>
      </div>

      {/* Правая колонка — юридические данные */}
      <div className={css.columnRight}>
        <span>ИП Костин А.Н.</span>
        <span>УНП 111111111</span>
        <span>Юридический адрес</span>
      </div>
    </footer>
  );
}

export default FooterComponent;


