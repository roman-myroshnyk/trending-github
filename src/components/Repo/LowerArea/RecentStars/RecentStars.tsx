// react
import React from "react";
// interfaces
import { dateRanges } from "../../../../const/dateRange";
// icons
import StarIcon from "../../../../icons/StarIcon/StarIcon";
// styles
import styles from "./RecentStars.module.css";

interface IRecentStars {
  since: string;
  starsSince: number;
}

const RecentStars: React.FC<IRecentStars> = ({ since, starsSince }) => {
  // change the format of since
  const formattedSince = dateRanges
    .filter((range) => range.dateType === since)[0]
    .title.toLowerCase();
  // format big numbers to appear with comma
  const formattedStarsSince = starsSince.toLocaleString("en", {
    useGrouping: true,
  });

  return (
    <span className={styles.starsByPeriod}>
      <StarIcon />
      {` ${formattedStarsSince} stars ${formattedSince}`}
    </span>
  );
};

export default RecentStars;
