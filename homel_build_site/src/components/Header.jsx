import React from 'react';
import styles from './header.module.css';
import logo from './images/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  console.log("Состояние меню open:", isMenuOpen);

  const handleSidebarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if (clickX <= 30 && clickY <= 30) {
      setIsMenuOpen(false);
    }
  }; // <-- ВОТ ЗДЕСЬ БЫЛА ОШИБКА, СКОБКА СТОЯЛА НЕ ТАМ ИЛИ ОТСУТСТВОВАЛА

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.header__logo} alt="SAFEHOUSE" />
      
      <ul>
        <div 
          className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`} 
          onClick={handleSidebarClick}
        >
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

      <span onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burgerBtn}></span>
    </header>
  );
}

export default Header;
