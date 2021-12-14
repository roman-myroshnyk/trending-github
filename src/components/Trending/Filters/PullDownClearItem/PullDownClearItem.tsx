// react
import React from "react";
// icons
import ClearIcon from "../../../../icons/ClearIcon/ClearIcon";
// styles
import styles from "./PullDownClearItem.module.css";

interface IPullDownClearItem {
  text: string;
}

const PullDownClearItem: React.FC<IPullDownClearItem> = ({ text }) => {
  return (
    <a className={styles.modalMenuItem}>
      <ClearIcon />
      <span className={styles.modalMenuItemText}> {text}</span>
    </a>
  );
};

export default PullDownClearItem;
