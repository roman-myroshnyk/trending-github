// react
import React from "react";
// styles
import styles from "./PullDownMenuList.module.css";

const PullDownMenuList: React.FC = ({ children }) => {
  return <div className={styles.modalMenuList}>{children}</div>;
};

export default PullDownMenuList;
