// react
import React from "react";
// icons
import DownArrowIcon from "../../../../icons/DownArrowIcon/DownArrowIcon";
//styles
import styles from "./MoreButton.module.css";

const MoreButton: React.FC = () => {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>
        <DownArrowIcon />
      </summary>
    </details>
  );
};

export default MoreButton;
