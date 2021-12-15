// react
import React from "react";
// interfaces
import { IRepository } from "../../api/interfaces";
// styles
import styles from "./Repo.module.css";
// components
import FloatingArea from "./FloatingArea/FloatingArea";
import SponsorButton from "./FloatingArea/SponsorButton/SponsorButton";
import StarButton from "./FloatingArea/StarButton/StarButton";
import MoreButton from "./FloatingArea/MoreButton/MoreButton";
import ButtonsGroup from "./FloatingArea/ButtonsGroup/ButtonsGroup";
import RepoTitle from "./RepoTitle/RepoTitle";
import RepoDescription from "./RepoDescription/RepoDescription";
import LowerArea from "./LowerArea/LowerArea";
import ProgrammingLanguage from "./LowerArea/ProgrammingLanguage/ProgrammingLanguage";
import StarLink from "./LowerArea/StarLink/StarLink";
import ForkLink from "./LowerArea/ForkLink/ForkLink";
import BuiltBy from "./LowerArea/BuiltBy/BuiltBy";
import RecentStars from "./LowerArea/RecentStars/RecentStars";

interface IRepo {
  repo: IRepository;
}

const Repo: React.FC<IRepo> = ({
  repo: {
    url,
    username,
    repositoryName,
    description,
    language,
    totalStars,
    forks,
    builtBy,
    since,
    starsSince,
  },
}) => (
  <div className={styles.wrapper}>
    <FloatingArea>
      <SponsorButton />
      <ButtonsGroup>
        <StarButton />
        <MoreButton />
      </ButtonsGroup>
    </FloatingArea>
    <RepoTitle {...{ url, username, repositoryName }} />
    <RepoDescription {...{ description }} />
    <LowerArea>
      <ProgrammingLanguage {...{ language }} />
      <StarLink {...{ url, totalStars }} />
      <ForkLink {...{ url, forks, repositoryName }} />
      <BuiltBy {...{ builtBy }} />
      <RecentStars {...{ since, starsSince }} />
    </LowerArea>
  </div>
);

export default Repo;
