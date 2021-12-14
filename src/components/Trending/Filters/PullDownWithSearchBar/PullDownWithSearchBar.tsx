import React from "react";

import styles from "./PullDownWithSearchBar.module.css";

interface IPullDownWithSearchBar {
  title: string;
  selectedValue: string;
}
const PullDownWithSearchBar: React.FC<IPullDownWithSearchBar> = ({
  title,
  selectedValue,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pullDown}>
        {`${title}: `}
        <span className={styles.pullDownSpan}> {selectedValue} </span>
      </div>
    </div>
  );
};

export default PullDownWithSearchBar;
