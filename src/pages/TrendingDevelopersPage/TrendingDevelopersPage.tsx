import React from "react";
import Controls from "../../components/Trending/Controls/Controls";
import Header from "../../components/Header/Header";
import MainContentsWrapper from "../../components/MainContentsWrapper/MainContentsWrapper";
import DeveloperBage from "../../components/Developer/DeveloperBage";
import { developersResponse } from "../../const/developersMockData";
const DevelopersPage: React.FC = () => (
  <div>
    <Header
      title="Trending"
      subTitle="These are the developers building the hot tools today."
    />
    <MainContentsWrapper>
      <Controls hideSpokenLanguages={true} />
      {developersResponse.map((developer) => {
        return <DeveloperBage key={developer.rank} developer={developer} />;
      })}
    </MainContentsWrapper>
  </div>
);

export default DevelopersPage;
