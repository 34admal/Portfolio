import header__logo from "./images/logo.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <img src={header__logo} alt="image logo safehouse" className={styles.headerLogo} />
      <div className={styles.menu}>
        <nav>
          <ul>
            <li>Портфолио</li>
            <li>Услуги</li>
            <li>Цены</li>
            <li>Контакты</li>
            <li className={styles.header__number}>+375 (25) 123-45-67</li>
          </ul>
        </nav>
        <p className={styles.menu__callback}>Заказать звонок</p>
      </div>
    </header>
  );
}

export default Header;
