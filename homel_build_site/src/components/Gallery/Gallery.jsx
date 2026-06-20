import styles from "./Gallery.module.css";
import tileImg from "./images/tile.png";
import masonryImg from "./images/masonry.png";
import finishingImg from "./images/finishing.png";

function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <span className={`${styles.line} ${styles.lineLeft}`} />
        <span className={styles.title}>ГАЛЕРЕЯ РАБОТ</span>
        <span className={`${styles.line} ${styles.lineRight}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.tileBlock}>
          <span className={styles.contour} />
          <img src={tileImg} alt="Плитка" className={styles.photo} />
          <div className={styles.overlay} />
          <span className={styles.categoryTitle}>ПЛИТКА</span>
        </div>

        <div className={styles.finishingBlock}>
  <span className={styles.contourFinishing} />
  <img src={finishingImg} alt="Отделка" className={styles.photo} />
  <div className={styles.overlayFinishing} />
  <span className={styles.categoryTitle}>ОТДЕЛКА</span>
</div>

      </div>
    </section>
  );
}

export default Gallery;
