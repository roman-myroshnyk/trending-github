// react
import React from "react";
// styles
import styles from "./Avatar.module.css";

interface IAvatar {
  url: string;
  avatar: string;
}

const Avatar: React.FC<IAvatar> = ({ url, avatar }) => {
  return (
    <div className={styles.avatar}>
      <a href={url} className={styles.link}>
        <img className={styles.img} src={avatar} />
      </a>
    </div>
  );
};

export default Avatar;
