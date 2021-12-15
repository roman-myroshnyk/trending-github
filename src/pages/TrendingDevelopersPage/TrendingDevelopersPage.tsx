// react
import React, { useContext } from "react";
// context
import { TrendingContext } from "../../context/TrendingContext";
// react-query hook
import useTrendingDevelopers from "../../api/useTrendingDevelopers";
// components
import Controls from "../../components/Trending/Controls/Controls";
import Header from "../../components/Header/Header";
import MainContentsWrapper from "../../components/MainContentsWrapper/MainContentsWrapper";
import DeveloperBage from "../../components/Developer/DeveloperBage";
import FetchingPlaceholder from "../../components/FetchingPlaceholder/FetchingPlaceholder";
import ErrorPlaceholder from "../../components/ErrorPlaceholder/ErrorPlaceholder";

// mocked response
// import { developersResponse } from "../../const/developersMockData";

const DevelopersPage: React.FC = () => {
  // filter context
  const { dateRange, language } = useContext(TrendingContext);
  // api query
  const { data, error, isFetching } = useTrendingDevelopers(
    dateRange.dateType,
    language.code
  );

  return (
    <div>
      <Header
        title="Trending"
        subTitle="These are the developers building the hot tools today."
      />
      <MainContentsWrapper>
        <Controls hideSpokenLanguages={true} />
        {isFetching && <FetchingPlaceholder />}
        {error && <ErrorPlaceholder title="Oops, something went wrong" />}
        {data && data?.length == 0 && (
          <ErrorPlaceholder
            title={`It looks like we don't have any trending developers for ${language.language}`}
          />
        )}
        {data &&
          data?.length > 0 &&
          data.map((developer) => {
            return <DeveloperBage key={developer.rank} developer={developer} />;
          })}
      </MainContentsWrapper>
    </div>
  );
};

export default DevelopersPage;
