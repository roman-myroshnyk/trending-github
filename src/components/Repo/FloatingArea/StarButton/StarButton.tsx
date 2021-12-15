// react
import React from "react";
// icon
import BigStarIcon from "../../../../icons/BigStarIcon/BigStarIcon";
// styles
import styles from "./StarButton.module.css";

const StarButton: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <BigStarIcon />
        <span className={styles.title}>{` Star `}</span>
      </button>
    </div>
  );
};

export default StarButton;
