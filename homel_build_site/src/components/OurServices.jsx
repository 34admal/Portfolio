import { useState } from "react";
import styles from "./OurServices.module.css";

function OurServices() {
  
  const [activeTab, setActiveTab] = useState("plumbing");

  return (
   
     <span className={styles.services__title}>НАШИ УСЛУГИ</span>

  );
}

export default OurServices;