// react
import React from "react";
// styles
import styles from "./ButtonsGroup.module.css";

const ButtonsGroup: React.FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ButtonsGroup;
