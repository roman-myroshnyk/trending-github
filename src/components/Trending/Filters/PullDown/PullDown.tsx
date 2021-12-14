// react
import React from "react";
// styles
import styles from "./PullDown.module.css";

interface IPullDown {
  title: string;
  selectedValue: string;
}
const PullDown: React.FC<IPullDown> = ({ title, selectedValue }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pullDown}>
        {` ${title}: `}:{" "}
        <span className={styles.pullDownSpan}> {selectedValue} </span>
      </div>
    </div>
  );
};

export default PullDown;
