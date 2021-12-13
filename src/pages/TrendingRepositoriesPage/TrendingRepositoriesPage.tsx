import React from "react";
import Controls from "../../components/Trending/Controls/Controls";
import Header from "../../components/Header/Header";
import MainContentsWrapper from "../../components/MainContentsWrapper/MainContentsWrapper";
import Repo from "../../components/Repo/Repo";
import { repositoriesResponse } from "../../const/repositoriesMockData";
const RepositoriesPage: React.FC = () => (
  <div>
    <Header
      title="Trending"
      subTitle="See what the GitHub community is most excited about today."
    />
    <MainContentsWrapper>
      <Controls />
      {repositoriesResponse.map((repository) => {
        return <Repo key={repository.rank} repo={repository} />;
      })}
    </MainContentsWrapper>
  </div>
);

export default RepositoriesPage;
