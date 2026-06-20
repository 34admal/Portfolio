import styles from "./Gallery.module.css";
import tileImg from "./images/tile.png";
import masonryImg from "./images/masonry.png";


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

        <div className={styles.masonryBlock}>
          <span className={styles.contourMasonry} />
          <img src={masonryImg} alt="Кладка" className={styles.photo} />
          <div className={styles.overlayMasonry} />
  <span className={styles.categoryTitle}>КЛАДКА</span>
</div>
        </div>
      
    </section>
  );
}

export default Gallery;
