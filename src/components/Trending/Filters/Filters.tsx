// react
import React from "react";
//import { useParams } from "react-router-dom";
// components
import PullDown from "./PullDown/PullDown";
import PullDownWithSearchBar from "./PullDownWithSearchBar/PullDownWithSearchBar";
// constants
import { languages } from "../../../const/languages";
import { spokenLanguages } from "../../../const/spokenLanguages";
import { dateRanges } from "../../../const/dateRange";
// utils
//import useQueryParams from "../../../utils/useQueryParams";
// styles
import styles from "./Filters.module.css";

interface IFilters {
  hideSpokenLanguges?: boolean;
}
const TrendingListControls: React.FC<IFilters> = ({ hideSpokenLanguges }) => {
  // const query = useQueryParams();
  // const { language = "Any" } = useParams<{ language: string }>();

  return (
    <div className={styles.wrapper}>
      {!hideSpokenLanguges && (
        <PullDownWithSearchBar
          items={spokenLanguages}
          title="Spoken Language"
          modalTilte="Select a spoken language"
          selectedValue="Any"
        />
      )}
      <PullDownWithSearchBar
        items={languages}
        title="Language"
        modalTilte="Select a language"
        selectedValue="Any"
      />
      <PullDown
        items={dateRanges}
        title="Date range"
        modalTitle="Adjust time span"
        selectedValue="Any"
      />
    </div>
  );
};

export default TrendingListControls;
