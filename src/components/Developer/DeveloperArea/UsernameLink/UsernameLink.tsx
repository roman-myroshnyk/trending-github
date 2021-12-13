// react
import React from "react";
// styles
import styles from "./UsernameLink.module.css";

interface IUsernameLink {
  url: string;
  username: string;
}

const UsernameLink: React.FC<IUsernameLink> = ({ url, username }) => {
  return (
    <p className={styles.title}>
      <a className={styles.link} href={url}>
        {username}
      </a>
    </p>
  );
};

export default UsernameLink;
