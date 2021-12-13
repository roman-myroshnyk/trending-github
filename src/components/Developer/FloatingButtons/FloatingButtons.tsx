// react
import React from "react";
// styles
import styles from "./FloatingButtons.module.css";

const FloatingButtons: React.FC = ({ children }) => {
  return <div className={styles.floatingButtons}>{children}</div>;
};

export default FloatingButtons;
