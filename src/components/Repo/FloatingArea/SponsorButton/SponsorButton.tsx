// react
import React from "react";
// icon
import SponsorIcon from "../../../../icons/SponsorIcon/SponsorIcon";
// styles
import styles from "./SponsorButton.module.css";

const SponsorButton: React.FC = () => {
  return (
    <a className={styles.link}>
      <SponsorIcon />
      <span className={styles.title}>Sponsor</span>
    </a>
  );
};

export default SponsorButton;
