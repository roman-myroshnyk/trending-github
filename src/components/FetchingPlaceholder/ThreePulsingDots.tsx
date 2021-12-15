// react
import React from "react";
// styles
import styles from "./ThreePulsingDots.module.css";

/**
 * Placeholder Three Pulsing Dots
 */
export const ThreePulsingDots: React.FC = () => (
  <div>
    <div className={styles.pulsingDot} />
    <div className={styles.pulsingDot} />
    <div className={styles.pulsingDot} />
  </div>
);
