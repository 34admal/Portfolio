import React from 'react';
import css from './FooterComponent.module.css';

function FooterComponent() {
  return (
    <footer className={css.footer}>
      {/* Левая часть: Телефон и Email */}
      <div className={css.contactsBlock}></div>

      {/* Правая часть: Копирайт и УНП */}
      <div className={css.infoBlock}></div>
    </footer>
  );
}

export default FooterComponent;
