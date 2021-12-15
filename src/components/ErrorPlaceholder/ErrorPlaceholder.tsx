// react
import React from "react";
// styles
import styles from "./ErrorPlaceholder.module.css";

interface IErrorPlaceholder {
  title: string;
}

const ErrorPlaceholder: React.FC<IErrorPlaceholder> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.errorTitle}>{title}</h1>
    </div>
  );
};

export default ErrorPlaceholder;
