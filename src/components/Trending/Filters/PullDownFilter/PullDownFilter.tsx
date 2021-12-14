// react
import React from "react";
// styles
import styles from "./PullDownFilter.module.css";

interface IPullDownFilter {
  searchString: string;
  setSearchString: (e: string) => void;
}

const PullDownFilter: React.FC<IPullDownFilter> = ({
  searchString,
  setSearchString,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder="Filter languages"
        className={styles.input}
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
    </div>
  );
};

export default PullDownFilter;
