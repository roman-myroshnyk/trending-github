// react
import React from "react";
// icons
import CheckIcon from "../../../../icons/CheckIcon/CheckIcon";
// styles
import styles from "./PullDownMenuItem.module.css";

interface IPullDownMenuItem {
  checked?: boolean;
  text: string;
}

const PullDownMenuItem: React.FC<IPullDownMenuItem> = ({
  checked = false,
  text,
}) => {
  return (
    <a className={styles.modalMenuItem}>
      <CheckIcon checked={checked} />
      <span className={styles.modalMenuItemText}> {text}</span>
    </a>
  );
};

export default PullDownMenuItem;
