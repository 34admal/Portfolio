import header__logo from "./images/logo.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={header__logo} alt="SAFEHOUSE" className={styles.header__logo} />

      <nav className={styles.nav}>
        <ul>
          <li className={styles.navLink}>Портфолио</li>
          <li className={styles.navLink}>Услуги</li>
          <li className={styles.navLink}>Цены</li>
          <li className={styles.navLink}>Контакты</li>

         
          <li className={styles.contactsBlock}>
      <span className={styles.phone}>+375 (25) 123-45-67</span>
      <span className={styles.callback}>Заказать звонок</span>
    </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
