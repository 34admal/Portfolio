import React from 'react';
import styles from './header.module.css';
import logo from './images/logo.png'; // Убедитесь, что путь к вашему логотипу верный

// Внутренняя чистая функция для кнопки, чтобы не раздувать основную разметку
const BurgerButton = ({ onClick }) => (
  <button className={styles.burgerBtn} onClick={onClick} aria-label="Меню">
    <span className={styles.burgerLine}></span>
    <span className={styles.burgerLine}></span>
    <span className={styles.burgerLine}></span>
  </button>
);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.header__logo} alt="SAFEHOUSE" />
      
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navLink}><a href="#gallery">Портфолио</a></li>
          <li className={styles.navLink}><a href="#services">Услуги</a></li>
          <li className={styles.navLink}><a href="#prices">Цены</a></li>
          <li className={styles.navLink}><a href="#contacts">Контакты</a></li>
          
          {/* Блок контактов, как мы выяснили, сидит внутри списка */}
          <div className={styles.contactsBlock}>
            <span>+375 (25) 123-45-67</span>
            <span className={styles.callback}>Заказать звонок</span>
          </div>
        </ul>
      </nav>

    
      <BurgerButton onClick={() => console.log('клик')} />
    </header>
  );
}

export default Header;
