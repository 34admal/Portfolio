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
  const currentThumbTop = useRef(0);
  const isDragging = useRef(false);

 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      currentThumbTop.current = 0;
      setThumbTop(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

 
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
      const newTop = percentage * maxTrackY;
      
      currentThumbTop.current = newTop;
      thumb.style.transform = `translateY(${newTop}px)`;
    }
  };

 
  const handleMouseDown = (e) => {
    e.preventDefault();
    const el = scrollContainerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!el || !track || !thumb) return;

    isDragging.current = true;
    el.style.scrollBehavior = "auto";

    const startY = e.clientY;
    const startTop = currentThumbTop.current;
    const maxTrackY = track.clientHeight - thumb.clientHeight;
    const scrollHeight = el.scrollHeight - el.clientHeight;

    const handleMouseMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - startY;
      let newTop = startTop + deltaY;

      newTop = Math.max(0, Math.min(newTop, maxTrackY));
      
      currentThumbTop.current = newTop;
      thumb.style.transform = `translateY(${newTop}px)`;

      if (maxTrackY > 0 && scrollHeight > 0) {
        el.scrollTop = (newTop / maxTrackY) * scrollHeight;
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      if (el) el.style.scrollBehavior = "";
      setThumbTop(currentThumbTop.current);

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
        
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть галерею">
          <span className={styles.closeLine}></span>
        </button>
        
        <span className={styles.modalTitle}>{title || "КРОВЛЯ"}</span>
        
       
        <div 
          className={styles.scrollContainer} 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className={styles.photoGrid}>
            {roofImages.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Кровля ${index + 1}`} 
                className={styles.modalPhoto}
              />
            ))}
          </div>
          
          {/* Рельсы лежат внутри контейнера и всегда равны его видимой высоте */}
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
