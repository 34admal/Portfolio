import styles from "./FeedbackForm.module.css";

function FeedbackForm() {
  return (
    <form className={styles.form}>
     <span className={styles.title}>ЗАПОЛНИТЕ ФОРМУ</span>
     <span className={styles.label}>Ваше имя</span> 
    </form>
  );
}

export default FeedbackForm;

