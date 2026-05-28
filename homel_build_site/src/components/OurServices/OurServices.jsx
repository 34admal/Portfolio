import { useState } from "react";
import styles from "./OurServices.module.css";

// Финальные списки строго по карточкам с макета
const servicesData = {
  plumbing: {
    title: "Сантехника",
    list: [
      "Замена труб в ванной и туалете",
      "Замена труб в ванной",
      "Замена труб на пластиковые",
      "Монтаж трубопроводов ПВХ",
      "Замена и демонтаж радиаторов отопления",
      "Перенос и установка счетчиков",
      "Монтаж и ремонт водопровода",
      "Монтаж отопления",
      "Монтаж канализации",
      "Замена и перенос полотенцесушителя",
      "Установка кранов на полотенцесушитель",
      "Установка инсталляций",
      "Установка всех видов сантехнического оборудования",
      "Замена батарей отопления"
    ]
  },
  finishing: {
    title: "Отделочные работы",
    list: [
      "Электромонтажные и сантехнические работы",
      "Демонтажные работы",
      "Штукатурные работы",
      "Малярные работы",
      "Монтаж ГКЛ",
      "Облицовка стен и потолков",
      "Укладка плитки",
      "Укладка всех видов напольных покрытий"
    ]
  },
  construction: {
    title: "Строительство домов",
    list: [
      "Проектирование деревянных домов",
      "Устройство фундаментов",
      "Монтаж стенового комплекта",
      "Кровельные работы",
      "Внутренние отделочные работы",
      "Фасады загородных домов",
      "Инженерные сети"
    ]
  },
  electricity: {
    title: "Электрика",
    list: [
      "Проектирование систем электроснабжения",
      "Монтаж силовой электропроводки",
      "Установка систем автоматизации",
      "Сборка распределительных электрощитов",
      "Подключение силового оборудования",
      "Установка осветительных приборов",
      "Пусконаладочные работы"
    ]
  }
};

function OurServices() {
  const [activeTab, setActiveTab] = useState("plumbing");

  return (
  <section className={styles.services}>
    <span className={styles.services__title}>НАШИ УСЛУГИ</span>
    <span className={styles.services__line}></span>

    <div className={styles.services__board}>
      
      {/* ЛЕВАЯ ЧАСТЬ: 4 карточки-вкладки с будущими фонами */}
      <div className={styles.services__tabs}>
        <div className={`${styles.tabCard} ${activeTab === "finishing" ? styles.active : ""}`} onClick={() => setActiveTab("finishing")}>Отделочные работы</div>
        <div className={`${styles.tabCard} ${activeTab === "construction" ? styles.active : ""}`} onClick={() => setActiveTab("construction")}>Строительство домов</div>
        <div className={`${styles.tabCard} ${activeTab === "electricity" ? styles.active : ""}`} onClick={() => setActiveTab("electricity")}>Электрика</div>
        <div className={`${styles.tabCard} ${activeTab === "plumbing" ? styles.active : ""}`} onClick={() => setActiveTab("plumbing")}>Сантехника</div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ: Пока просто пустая заглушка под контент */}
      <div className={styles.services__contentBox}></div>

    </div>
  </section>
);
}

export default OurServices;
