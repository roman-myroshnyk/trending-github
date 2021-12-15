// react
import React from "react";
// interfaces
import { IAuthor } from "../../../../api/interfaces";
// styles
import styles from "./BuiltBy.module.css";

const BuiltBy: React.FC<{ builtBy: IAuthor[] }> = ({ builtBy }) => {
  return (
    <span>
      {` Built by `}
      {builtBy.map(({ url, avatar, username }) => (
        <a key={url} href={url} className={styles.authorLink}>
          <img
            src={avatar}
            alt={username}
            className={styles.authorAvatar}
          ></img>
        </a>
      ))}
    </span>
  );
};

export default BuiltBy;
