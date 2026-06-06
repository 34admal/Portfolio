import styles from "./Feedback.module.css";
import FeedbackForm from "./FeedbackForm";
import peopleImg from "./images/peopleImg.png"; 

function Feedback() {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__container}>
        <FeedbackForm />
         <img src={peopleImg} alt="People" className={styles.people} />

      </div>
    </section>
  );
}

export default Feedback;
