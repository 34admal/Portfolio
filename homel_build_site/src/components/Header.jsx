import header__logo from "./images/logo.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div >
        
        
        <img src={header__logo} alt="image logo safehouse" className={styles.headerLogo} />
        
        
        <nav className={styles.menu}>
          <ul>
            
            <li className={styles.menuItem}>Портфолио</li>
            <li className={styles.menuItem}>Услуги</li>
            <li className={styles.menuItem}>Цены</li>
            <li className={styles.menuItem}>Контакты</li>
            
            
            <li className={styles.header__number}>+375 (25) 123-45-67</li>
            
            
            <li className={styles.menu__callback}>Заказать звонок</li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
