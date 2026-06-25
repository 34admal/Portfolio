

import styles from "./GalleryModal.module.css";

function GalleryModal() {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        {/* Контент модального окна будет здесь */}
      </div>
    </div>
  );
}

export default GalleryModal;
