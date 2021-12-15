// react
import React from "react";
// components
import { ThreePulsingDots } from "./ThreePulsingDots";
// styles
import styles from "./FetchingPlaceholder.module.css";

const PagePlaceholder: React.FC = () => (
  <div className={styles.placeholder}>
    <ThreePulsingDots />
  </div>
);

export default PagePlaceholder;
