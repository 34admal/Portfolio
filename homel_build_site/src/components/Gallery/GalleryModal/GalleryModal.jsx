

import styles from "./GalleryModal.module.css";
import roofImg1 from "./images/roofImg1.png";
import roofImg2 from "./images/roofImg2.png";
import roofImg3 from "./images/roofImg3.png";
import roofImg4 from "./images/roofImg4.png";
import roofImg5 from "./images/roofImg5.png";
import roofImg6 from "./images/roofImg6.png";

const roofImages = [roofImg1, roofImg2, roofImg3, roofImg4, roofImg5, roofImg6];


function GalleryModal({ isOpen, title }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button className={styles.closeButton}>✕</button>
        <h2 className={styles.modalTitle}>{title || "КРОВЛЯ"}</h2>

        <div className={styles.photoGrid}>
          
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;

