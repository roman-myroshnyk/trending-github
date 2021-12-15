// react
import React, { useContext } from "react";
// context
import { TrendingContext } from "../../context/TrendingContext";
// react-query hook
import useTrendingRepositories from "../../api/useTrendingRepositories";
// components
import Controls from "../../components/Trending/Controls/Controls";
import Header from "../../components/Header/Header";
import MainContentsWrapper from "../../components/MainContentsWrapper/MainContentsWrapper";
import Repo from "../../components/Repo/Repo";
import FetchingPlaceholder from "../../components/FetchingPlaceholder/FetchingPlaceholder";
import ErrorPlaceholder from "../../components/ErrorPlaceholder/ErrorPlaceholder";

// mocked response
//import { repositoriesResponse } from "../../const/repositoriesMockData";

const RepositoriesPage: React.FC = () => {
  // filter context
  const { dateRange, spokenLanguage, language } = useContext(TrendingContext);
  // api query
  const { data, error, isFetching } = useTrendingRepositories(
    dateRange.dateType,
    spokenLanguage.code,
    language.code
  );

  return (
    <div>
      <Header
        title="Trending"
        subTitle="See what the GitHub community is most excited about today."
      />
      <MainContentsWrapper>
        <Controls />
        {isFetching && <FetchingPlaceholder />}
        {error && <ErrorPlaceholder title="Oops, something went wrong" />}
        {data && data?.length == 0 && (
          <ErrorPlaceholder
            title={
              "It looks like we don't have any trending repositories for your choices."
            }
          />
        )}
        {data &&
          data?.length > 0 &&
          data.map((repository) => {
            return <Repo key={repository.rank} repo={repository} />;
          })}
      </MainContentsWrapper>
    </div>
  );
};

export default RepositoriesPage;
