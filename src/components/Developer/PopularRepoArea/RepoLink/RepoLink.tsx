// react
import React from "react";
// icons
import RepoIcon from "../../../../icons/RepoIcon/RepoIcon";
// styles
import styles from "./RepoLink.module.css";

interface IRepoLink {
  url: string;
  repositoryName: string;
}

const RepoLink: React.FC<IRepoLink> = ({ url, repositoryName }) => {
  return (
    <h1 className={styles.title}>
      <a className={styles.link} href={url}>
        <RepoIcon />
        {` ${repositoryName} `}
      </a>
    </h1>
  );
};

export default RepoLink;
