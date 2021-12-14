// react
import React from "react";
//import { useParams } from "react-router-dom";
// components
import PullDown from "./PullDown/PullDown";
import PullDownWithSearchBar from "./PullDownWithSearchBar/PullDownWithSearchBar";
// utils
//import useQueryParams from "../../../utils/useQueryParams";
// styles
import styles from "./Filters.module.css";

const TrendingListControls: React.FC = () => {
  // const query = useQueryParams();
  // const { language = "Any" } = useParams<{ language: string }>();

  return (
    <div className={styles.wrapper}>
      <PullDownWithSearchBar title="Spoken Language" selectedValue="Any" />
      <PullDownWithSearchBar title="Language" selectedValue="Any" />
      <PullDown title="Date range" selectedValue="Any" />
    </div>
  );
};

export default TrendingListControls;
