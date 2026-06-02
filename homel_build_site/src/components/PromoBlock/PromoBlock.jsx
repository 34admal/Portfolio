import styles from "./PromoBlock.module.css";

function PromoBlock() {
  return (
    <section className={styles.promo}>
      <div className={styles.promo__container}>
        <p className={styles.promo__text}>
          Для многих ремонт — это что-то вроде стихийного бедствия, но чем тщательнее вы его спланируете, тем проще будет его пережить. А уютная, привлекательная и чистая квартира – это мечта любого человека.
        </p>
        <span className={styles.promo__accent}>
          Давайте воплотим Ваши мечты в реальность!
        </span>
      </div>
    </section>
  );
}

export default PromoBlock;
