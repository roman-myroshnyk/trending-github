// react
import React from "react";
// styles
import styles from "./FloatingArea.module.css";

const FloatingArea: React.FC = ({ children }) => {
  return <div className={styles.rightFloating}>{children}</div>;
};

export default FloatingArea;
