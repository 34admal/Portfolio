import styles from "./Feedback.module.css";
import FeedbackForm from "./FeedbackForm";

function Feedback() {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__container}>
        <div className={styles.formCard}>
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}

export default Feedback;
