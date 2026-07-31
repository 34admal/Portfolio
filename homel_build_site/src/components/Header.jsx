import React from 'react';
import styles from './header.module.css';
import logo from './images/logo.png';
const BurgerButton = ({ isOpen, onClick }) => (
  <button className={styles.burgerBtn} onClick={onClick} />
);; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.header__logo} alt="SAFEHOUSE" />
      
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navLink}><a href="#gallery">Портфолио</a></li>
          <li className={styles.navLink}><a href="#services">Услуги</a></li>
          <li className={styles.navLink}><a href="#prices">Цены</a></li>
          <li className={styles.navLink}><a href="#contacts">Контакты</a></li>
          
          <div className={styles.contactsBlock}>
            <span>+375 (25) 123-45-67</span>
            <span className={styles.callback}>Заказать звонок</span>
          </div>
        </ul>
      </nav>
      <span className={styles.burgerBtn}></span>
    </header>
  );
}

export default Header;
