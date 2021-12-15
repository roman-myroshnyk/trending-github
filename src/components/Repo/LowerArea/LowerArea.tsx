// react
import React from "react";
// styles
import styles from "./LowerArea.module.css";

const LowerArea: React.FC = ({ children }) => {
  return <div className={styles.lowerArea}>{children}</div>;
};

export default LowerArea;
