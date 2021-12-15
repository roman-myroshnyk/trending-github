// react
import React from "react";
// icons
import PopularRepoIcon from "../../../../icons/PopularRepoIcon/PopularRepoIcon";
// styles
import styles from "./RepoTitle.module.css";

const RepoTitle: React.FC = () => {
  return (
    <div className={styles.title}>
      <PopularRepoIcon />
      Popular repo
    </div>
  );
};

export default RepoTitle;
