// react
import React from "react";
// icons
import ForkIcon from "../../../../icons/ForkIcon/ForkIcon";
// styles
import styles from "./ForkLink.module.css";

interface IForkLink {
  url: string;
  forks: number;
  repositoryName: string;
}

const ForkLink: React.FC<IForkLink> = ({ url, repositoryName, forks }) => {
  // format big numbers to appear with comma
  const formattedForks = forks.toLocaleString("en", { useGrouping: true });

  return (
    <a
      className={styles.forksLink}
      href={`${url}/network/members.${repositoryName}`}
    >
      <ForkIcon />
      {` ${formattedForks} `}
    </a>
  );
};

export default ForkLink;
