// react
import React from "react";
// styles
import styles from "./DeveloperRank.module.css";

interface IDeveloperRank {
  rank: number;
}

const DeveloperRank: React.FC<IDeveloperRank> = ({ rank }) => {
  return <a className={styles.rank}>{rank}</a>;
};

export default DeveloperRank;
