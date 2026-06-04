import styles from "./FeedbackForm.module.css";

function FeedbackForm() {
  return (
    <form className={styles.form}>
      <span className={styles.title}>ЗАПОЛНИТЕ ФОРМУ</span>

      <span className={`${styles.label} ${styles.label_name}`}>Ваше имя</span>
      <span className={styles.line}></span>

      <span className={`${styles.label} ${styles.label_phone}`}>
        Номер телефона
      </span>
      <span className={styles.line}></span>

      <span className={`${styles.label} ${styles.label_text}`}>
        Опишите Вашу заявку
      </span>
      <textarea className={styles.textarea}></textarea>

      <button type="submit" className={styles.submitBtn}>
        Получить консультацию
      </button>
    </form>
  );
}

export default FeedbackForm;
