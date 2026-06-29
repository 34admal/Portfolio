

import styles from "./GalleryModal.module.css";
import roofImg1 from "./images/roofImg1.png";
import roofImg2 from "./images/roofImg2.png";
import roofImg3 from "./images/roofImg3.png";
import roofImg4 from "./images/roofImg4.png";
import roofImg5 from "./images/roofImg5.png";
import roofImg6 from "./images/roofImg6.png";

const roofImages = [roofImg1, roofImg2, roofImg3, roofImg4, roofImg5, roofImg6];


function GalleryModal({ isOpen, title, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть галерею">
  <span className={styles.closeLine}></span>
</button>
        <span className={styles.modalTitle}>{title || "КРОВЛЯ"}</span>

       <div className={styles.photoGrid}>
  {roofImages.map((src, index) => (
    <img 
      key={index} 
      src={src} 
      alt={`Кровля ${index + 1}`} 
      className={styles.modalPhoto} /* Вернули класс для управления шириной */
    />
  ))}
</div>


      </div>
    </div>
  );
}

export default GalleryModal;

