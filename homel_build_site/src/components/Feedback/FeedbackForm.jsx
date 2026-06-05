import { useState } from "react";
import styles from "./FeedbackForm.module.css";

function FeedbackForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className={styles.form}>
      <span className={styles.title}>ЗАПОЛНИТЕ ФОРМУ</span>

      <input 
        type="text" 
        placeholder="Ваше имя" 
        className={`${styles.input} ${styles.label_name}`} 
      />
      <span className={styles.line}></span>

      <input 
        type="tel" 
        placeholder="Номер телефона" 
        className={`${styles.input} ${styles.label_phone}`} 
      />
      <span className={styles.line}></span>

      <span className={`${styles.label} ${styles.label_text}`}>Опишите Вашу заявку</span>
      <textarea className={styles.textarea}></textarea>

      <button type="submit" className={styles.submitBtn}>
        Получить консультацию
      </button>

      <label htmlFor="policy" className={styles.checkboxContainer}>
        <input 
          type="checkbox" 
          id="policy" 
          className={styles.checkboxHidden} 
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className={styles.checkboxCustom}>
          {isChecked && (
            <svg viewBox="0 0 11 11" fill="none" width="10" height="10">
              <path 
                d="M0.912109 0.550781L4.56076 8.63499L9.91211 0.550781" 
                stroke="white" 
                strokeWidth="2" 
              />
            </svg>
          )}
        </span>
        <span className={styles.checkboxText}>
          Принимаю условия Политики конфиденциальности
        </span>
      </label>
    </form>
  );
}

export default FeedbackForm;


