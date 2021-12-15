// react
import React from "react";
// icons
import ClearIcon from "../../../../icons/ClearIcon/ClearIcon";
// styles
import styles from "./PullDownClearItem.module.css";

interface IPullDownClearItem {
  text: string;
  clickHandler: () => void;
}

const PullDownClearItem: React.FC<IPullDownClearItem> = ({
  text,
  clickHandler,
}) => {
  return (
    <a onClick={clickHandler} className={styles.modalMenuItem}>
      <ClearIcon />
      <span className={styles.modalMenuItemText}> {text}</span>
    </a>
  );
};

export default PullDownClearItem;
