// react
import React, { useContext } from "react";
// context
import { TrendingContext } from "../../../context/TrendingContext";

// components
import PullDown from "./PullDown/PullDown";
import PullDownWithSearchBar from "./PullDownWithSearchBar/PullDownWithSearchBar";
// constants
import { languages } from "../../../const/languages";
import { spokenLanguages } from "../../../const/spokenLanguages";
import { dateRanges } from "../../../const/dateRange";
// styles
import styles from "./Filters.module.css";

interface IFilters {
  hideSpokenLanguges?: boolean;
}

const TrendingListControls: React.FC<IFilters> = ({ hideSpokenLanguges }) => {
  // context
  const {
    dateRange,
    updateDateRange,
    language,
    updateLanguage,
    spokenLanguage,
    updateSpokenLanguage,
  } = useContext(TrendingContext);

  return (
    <div className={styles.wrapper}>
      {/** spoken languages drop-down */}
      {!hideSpokenLanguges && (
        <PullDownWithSearchBar
          items={spokenLanguages}
          title="Spoken Language"
          modalTilte="Select a spoken language"
          handleSelect={updateSpokenLanguage}
          selectedValue={spokenLanguage.code}
          selectedTitle={spokenLanguage.language}
        />
      )}
      {/** programming languages drop-down */}
      <PullDownWithSearchBar
        items={languages}
        title="Language"
        modalTilte="Select a language"
        handleSelect={updateLanguage}
        selectedValue={language.code}
        selectedTitle={language.language}
      />
      {/** dates drop-down */}
      <PullDown
        items={dateRanges}
        title="Date range"
        modalTitle="Adjust time span"
        handleSelect={updateDateRange}
        selectedValue={dateRange.dateType}
        selectedTitle={dateRange.title}
      />
    </div>
  );
};

export default TrendingListControls;
