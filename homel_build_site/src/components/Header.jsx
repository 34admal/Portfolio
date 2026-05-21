import header__logo from "./images/logo.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.headerOutside}>
      <div className={styles.headerInside}>
        
        {/* Блок 1: Логотип */}
        <img src={header__logo} alt="image logo safehouse" className={styles.headerLogo} />
        
        {/* Блок 2: Все слои меню и контактов в едином потоке */}
        <nav className={styles.menu}>
          <ul>
            <li>Портфолио</li>
            <li>Услуги</li>
            <li>Цены</li>
            <li>Контакты</li>
            
            {/* Номер телефона */}
            <li className={styles.header__number}>+375 (25) 123-45-67</li>
            
            {/* Заказать звонок — теперь это честный элемент списка li! */}
            <li className={styles.menu__callback}>Заказать звонок</li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;