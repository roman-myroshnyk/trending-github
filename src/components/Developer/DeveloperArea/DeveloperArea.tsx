// react
import React from "react";
// styles
import styles from "./DeveloperArea.module.css";

const DeveloperArea: React.FC = ({ children }) => {
  return <div className={styles.developerArea}>{children}</div>;
};

export default DeveloperArea;
