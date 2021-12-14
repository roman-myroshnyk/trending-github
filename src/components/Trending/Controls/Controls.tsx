// react
import React from "react";
// components
import Navigation from "../Navigation/Navigation";
import Filters from "../Filters/Filters";
// styles
import styles from "./Controls.module.css";

const TrendingListControls: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Filters />
    </div>
  );
};

export default TrendingListControls;
