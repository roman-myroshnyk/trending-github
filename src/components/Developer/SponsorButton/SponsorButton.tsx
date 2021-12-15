import React from "react";

import SponsorIcon from "../../../icons/SponsorIcon/SponsorIcon";
import styles from "./SponsorButton.module.css";

const SponsorButton: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link}>
        <SponsorIcon />
        <span>{`  Sponsor `}</span>
      </a>
    </div>
  );
};

export default SponsorButton;
