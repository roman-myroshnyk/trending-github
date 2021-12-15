// react
import React from "react";
// icons
import RepoIcon from "../../../icons/RepoIcon/RepoIcon";
// styles
import styles from "./RepoTitle.module.css";

interface IRepoTitle {
  url: string;
  username: string;
  repositoryName: string;
}

const RepoTitle: React.FC<IRepoTitle> = ({ url, username, repositoryName }) => {
  return (
    <h1 className={styles.title}>
      <a className={styles.link} href={url}>
        <RepoIcon />
        <span className={styles.span}>{`${username} / `}</span>
        {repositoryName}
      </a>
    </h1>
  );
};

export default RepoTitle;
