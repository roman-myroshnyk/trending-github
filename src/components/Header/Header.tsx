// react
import React from "react";
// styles
import styles from "./Header.module.css";

interface IHeader {
  title: string;
  subTitle: string;
}
const Header: React.FC<IHeader> = ({ title, subTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerInnerWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  </header>
);

export default Header;
