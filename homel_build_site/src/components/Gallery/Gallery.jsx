import { useState } from "react";
import GalleryModal from "./GalleryModal/GalleryModal";


import styles from "./Gallery.module.css";
import tileImg from "./images/tile.png";
import masonryImg from "./images/masonry.png";
import finishingImg from "./images/finishing.png";
import roofingImg from "./images/roof.png";
import plumbingImg from "./images/plumbing.png";
import electricityImg from "./images/electricity.png";

function Gallery() {
  const [activeTitle, setActiveTitle] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <span className={`${styles.line} ${styles.lineLeft}`} />
        <span className={styles.title}>ГАЛЕРЕЯ РАБОТ</span>
        <span className={`${styles.line} ${styles.lineRight}`} />
      </div>

      <div className={styles.content}>
        {/* Блок 1: ПЛИТКА */}
        <div className={styles.tileBlock}>
          <span className={styles.contour} />
          <img src={tileImg} alt="Плитка" className={styles.photo} />
          <div className={styles.overlay} />
          <span className={styles.categoryTitle}>ПЛИТКА</span>
        </div>

        {/* Блок 2: КЛАДКА */}
        <div className={styles.masonryBlock}>
          <span className={styles.contourMasonry} />
          <img src={masonryImg} alt="Кладка" className={styles.photo} />
          <div className={styles.overlayMasonry} />
          <span className={`${styles.categoryTitle} ${styles.titleMasonry}`}>КЛАДКА</span>
        </div>

        {/* Блок 3: ОТДЕЛКА */}
        <div className={styles.finishingBlock}>
          <span className={styles.contourFinishing} />
          <img src={finishingImg} alt="Отделка" className={styles.photo} />
          <div className={styles.overlayFinishing} />
          <span className={styles.categoryTitle}>ОТДЕЛКА</span>
        </div>
         {/* 2. Новый блок 4: КРОВЛЯ */}
        <div className={styles.roofingBlock}>
          <span className={styles.contourRoofing} />
          <img src={roofingImg} alt="Кровля" className={styles.photo} />
        <div className={styles.overlay} />
  <span className={styles.categoryTitle}>КРОВЛЯ</span>
        </div>

        {/* 2. Новый блок 5: САНТЕХНИКА */}
        <div className={styles.plumbingBlock}>
          <span className={styles.contourPlumbing} />
          <img src={plumbingImg} alt="Сантехника" className={styles.photo} />
           <div className={styles.overlay} />
  <span className={styles.categoryTitle}>САНТЕХНИКА</span>
        </div>

        {/* 2. Новый блок 6: ЭЛЕКТРИКА */}
        <div className={styles.electricityBlock}>
          <span className={styles.contourElectricity} />
          <img src={electricityImg} alt="Электрика" className={styles.photo} />
          <div className={styles.overlay} />
          <span className={styles.categoryTitle}>ЭЛЕКТРИКА</span>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
