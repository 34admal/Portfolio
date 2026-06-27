

import styles from "./GalleryModal.module.css";

function GalleryModal({ isOpen, title }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button className={styles.closeButton}>✕</button>
        <h2 className={styles.modalTitle}>{title || "КРОВЛЯ"}</h2>
      </div>
    </div>
  );
}

export default GalleryModal;

