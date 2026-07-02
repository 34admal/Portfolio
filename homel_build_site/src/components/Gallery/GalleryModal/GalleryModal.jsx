import { useRef, useState, useEffect } from "react";
import styles from "./GalleryModal.module.css";
import roofImg1 from "./images/roofImg1.png";
import roofImg2 from "./images/roofImg2.png";
import roofImg3 from "./images/roofImg3.png";
import roofImg4 from "./images/roofImg4.png";
import roofImg5 from "./images/roofImg5.png";
import roofImg6 from "./images/roofImg6.png";

const roofImages = [roofImg1, roofImg2, roofImg3, roofImg4, roofImg5, roofImg6, roofImg1, roofImg2, roofImg3, roofImg4, roofImg5, roofImg6];

function GalleryModal({ isOpen, title, onClose }) {
  const scrollContainerRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  
  const [thumbTop, setThumbTop] = useState(0);
  const isDragging = useRef(false);

  // Блокировка прокрутки страницы сзади
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setThumbTop(0);
      if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Скролл колесиком мыши
  const handleScroll = () => {
    if (isDragging.current) return;

    const el = scrollContainerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!el || !track || !thumb) return;

    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    
    if (scrollHeight > 0) {
      const maxTrackY = track.clientHeight - thumb.clientHeight;
      const percentage = scrollTop / scrollHeight;
      setThumbTop(percentage * maxTrackY);
    }
  };

  // Drag-and-Drop без лагов
  const handleMouseDown = (e) => {
    e.preventDefault();
    const el = scrollContainerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!el || !track || !thumb) return;

    isDragging.current = true;

    const startY = e.clientY;
    const startTop = thumbTop;
    const maxTrackY = track.clientHeight - thumb.clientHeight;
    const scrollHeight = el.scrollHeight - el.clientHeight;

    const handleMouseMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - startY;
      let newTop = startTop + deltaY;

      newTop = Math.max(0, Math.min(newTop, maxTrackY));
      setThumbTop(newTop);

      if (maxTrackY > 0 && scrollHeight > 0) {
        el.scrollTop = (newTop / maxTrackY) * scrollHeight;
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
        
        {/* Кнопка закрытия работает через onClick={onClose} */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть галерею">
          <span className={styles.closeLine}></span>
        </button>
        
        <span className={styles.modalTitle}>{title || "КРОВЛЯ"}</span>
        
        {/* Контейнер, который скроллится колесиком */}
        <div 
          className={styles.scrollContainer} 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className={styles.photoGrid}>
            {title === "КРОВЛЯ" ? (
              roofImages.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`Кровля ${index + 1}`} 
                  className={styles.modalPhoto}
                />
              ))
            ) : (
              /* Сетка 3х3 для проверки скролла в пустых категориях */
              <>
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
                <div className={styles.modalPhotoPlaceholder} />
              </>
            )}
          </div>
          
          {/* Рельсы заперты строго внутри scrollContainer и никуда не уплывают */}
          <div className={styles.customScrollTrack} ref={trackRef}>
            <div 
              className={styles.customScrollThumb}
              ref={thumbRef}
              style={{ transform: `translateY(${thumbTop}px)` }}
              onMouseDown={handleMouseDown}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GalleryModal;
