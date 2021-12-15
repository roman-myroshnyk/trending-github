// react
import React from "react";
// styles
import styles from "./FollowButton.module.css";

const FollowButton: React.FC = () => {
  return (
    <div>
      <div className={styles.followButton}>
        <span>Follow</span>
      </div>
    </div>
  );
};

export default FollowButton;
