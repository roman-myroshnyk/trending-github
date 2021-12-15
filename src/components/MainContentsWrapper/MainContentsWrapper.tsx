// react
import React from "react";
// styles
import styles from "./MainContentsWrapper.module.css";

const MainContentsWrapper: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.innerWrapper}>{children}</div>
  </div>
);

export default MainContentsWrapper;
