// react
import React from "react";
// icons
import CloseIcon from "../../../../icons/CloseIcon/CloseIcon";
// styles
import styles from "./PullDownHeader.module.css";

interface IPullDownHeader {
  title: string;
  closeModal: () => void;
}

const PullDownHeader: React.FC<IPullDownHeader> = ({ title, closeModal }) => {
  return (
    <div className={styles.modalHeader}>
      <span className={styles.modaleHeaderTitle}>{title}</span>
      <button onClick={closeModal} className={styles.closeButton}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default PullDownHeader;
