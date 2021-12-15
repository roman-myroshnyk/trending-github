// react
import React from "react";
// styles
import styles from "./UserLink.module.css";

interface IUserLink {
  url: string;
  name: string;
}

const UserLink: React.FC<IUserLink> = ({ url, name }) => {
  return (
    <h1 className={styles.title}>
      <a className={styles.link} href={url}>
        {name}
      </a>
    </h1>
  );
};

export default UserLink;
