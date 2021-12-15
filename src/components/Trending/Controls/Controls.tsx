// react
import React from "react";
// components
import Navigation from "../Navigation/Navigation";
import Filters from "../Filters/Filters";
// styles
import styles from "./Controls.module.css";

interface IControls {
  hideSpokenLanguages?: boolean;
}

const Controls: React.FC<IControls> = ({ hideSpokenLanguages = false }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Filters hideSpokenLanguges={hideSpokenLanguages} />
    </div>
  );
};

export default Controls;
