// react
import React from "react";
// styles
import styles from "./RepoDescription.module.css";

interface IRepoDescription {
  description: string;
}

const RepoDescription: React.FC<IRepoDescription> = ({ description }) => {
  return <p className={styles.description}>{description}</p>;
};

export default RepoDescription;
