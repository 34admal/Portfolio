import React from 'react';
import styles from './header.module.css';
import logo from './images/logo.png';
const BurgerButton = ({ isOpen, onClick }) => (
  <button className={styles.burgerBtn} onClick={onClick} />
);; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
console.log("Состояние меню open:", isMenuOpen);
      return (
    <header className={styles.header}>
      <img src={logo} className={styles.header__logo} alt="SAFEHOUSE" />
      
     
        <ul>
        <div className={styles.navLinks}> 
      <li><a href="#gallery">Портфолио</a></li>
      <li><a href="#services">Услуги</a></li>
      <li><a href="#prices">Цены</a></li>
      <li><a href="#contacts">Контакты</a></li>
    </div>
          <div className={styles.contactsBlock}>
            <span>+375 (25) 123-45-67</span>
            <span className={styles.callback}>Заказать звонок</span>
          </div>
        </ul>
      
      
      {/* Наш рабочий оранжевый бургер-спан */}
      <span onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burgerBtn}></span>
    </header>
  );
}

export default Header;
