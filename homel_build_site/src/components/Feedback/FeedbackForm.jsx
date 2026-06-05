import styles from "./FeedbackForm.module.css";

function FeedbackForm() {
  return (
    <form className={styles.form}>
  <span className={styles.title}>ЗАПОЛНИТЕ ФОРМУ</span>

  <input type="text" placeholder="Ваше имя" className={`${styles.input} ${styles.label_name}`} />
  <span className={styles.line}></span>

  <input type="tel" placeholder="Номер телефона" className={`${styles.input} ${styles.label_phone}`} />
  <span className={styles.line}></span>

  <span className={`${styles.label} ${styles.label_text}`}>Опишите Вашу заявку</span>
  <textarea className={styles.textarea}></textarea>

  <button type="submit" className={styles.submitBtn}>
    Получить консультацию
  </button>

<label htmlFor="policy" className={styles.checkboxContainer}>
  <input type="checkbox" id="policy" className={styles.checkboxHidden} />
  <span className={styles.checkboxCustom}></span>
  <span className={styles.checkboxText}>
    Принимаю условия Политики конфиденциальности
  </span>
</label>
</form>

  );
}

export default FeedbackForm;
