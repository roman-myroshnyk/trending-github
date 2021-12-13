// react
import React from "react";
// icons
import StarIcon from "../../../../icons/StarIcon/StarIcon";
// styles
import styles from "./StarLink.module.css";

interface IStarLink {
  url: string;
  totalStars: number;
}

const StarLink: React.FC<IStarLink> = ({ url, totalStars }) => {
  // format big numbers to appear with comma
  const formattedTotalStars = totalStars.toLocaleString("en", {
    useGrouping: true,
  });
  return (
    <a className={styles.starsLink} href={`${url}/stargazers`}>
      <StarIcon />
      {` ${formattedTotalStars} `}
    </a>
  );
};

export default StarLink;
