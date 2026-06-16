import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} />
      <span className={styles.title}>ГАЛЕРЕЯ РАБОТ</span>
      <span className={`${styles.line} ${styles.lineRight}`} />
    </section>
  );
}

export default Gallery;

