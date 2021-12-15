import React from "react";

import styles from "./PopularRepoArea.module.css";

const PopularRepoArea: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <article className={styles.article}>{children}</article>
      </div>
    </div>
  );
};

export default PopularRepoArea;
