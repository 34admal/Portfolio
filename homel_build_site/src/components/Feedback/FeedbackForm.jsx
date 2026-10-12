import { useState } from "react";
import styles from "./FeedbackForm.module.css";

function FeedbackForm() {
  const [isChecked, setIsChecked] = useState(false);
  
 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  // 
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (status === "loading") return;

   
    setStatus("loading");

   
    setTimeout(() => {
     
      setName("");
      setPhone("");
      setMessage("");
      setIsChecked(false);
      
      
      setStatus("success");

     
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span className={styles.title}>ЗАПОЛНИТЕ ФОРМУ</span>

      <input 
        type="text" 
        placeholder="Ваше имя" 
        className={`${styles.input} ${styles.label_name}`} 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <span className={styles.line}></span>

      <input 
        type="tel" 
        placeholder="Номер телефона" 
        className={`${styles.input} ${styles.label_phone}`} 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <span className={styles.line}></span>

      <span className={`${styles.label} ${styles.label_text}`}>Опишите Вашу заявку</span>
      <textarea 
        className={styles.textarea}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      
      <button 
        type="submit" 
        className={`${styles.submitBtn} ${status === "success" ? styles.submitBtnSuccess : ""}`}
        disabled={status === "loading" || status === "success"}
      >
        {status === "idle" && "Получить консультацию"}
        {status === "loading" && "Отправка..."}
        {status === "success" && "Заявка отправлена!"}
      </button>

      <label htmlFor="policy" className={styles.checkboxContainer}>
        <input 
          type="checkbox" 
          id="policy" 
          className={styles.checkboxHidden} 
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          required
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

