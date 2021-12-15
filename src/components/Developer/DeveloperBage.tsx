// react
import React from "react";
// interfaces
import { IDeveloper } from "../../api/interfaces";
// styles
import styles from "./DeveloperBage.module.css";
// components
import Rank from "./DeveloperRank/DeveloperRank";
import Avatar from "./DeveloperArea/Avatar/Avatar";
import DeveloperArea from "./DeveloperArea/DeveloperArea";
import UserLink from "./DeveloperArea/UserLink/UserLink";
import UsernameLink from "./DeveloperArea/UsernameLink/UsernameLink";
import PopularRepoArea from "./PopularRepoArea/PopularRepoArea";
import RepoTitle from "./PopularRepoArea/RepoTitle/RepoTitle";
import RepoLink from "./PopularRepoArea/RepoLink/RepoLink";
import RepoDescription from "./PopularRepoArea/RepoDescription/RepoDescription";
import FollowButton from "./FollowButton/FollowButton";
import SponsorButton from "./SponsorButton/SponsorButton";
import FloatingButtons from "./FloatingButtons/FloatingButtons";

interface IDeveloperBageProps {
  developer: IDeveloper;
}

const DeveloperBage: React.FC<IDeveloperBageProps> = ({
  developer: { rank, url, avatar, name, username, popularRepository },
}) => (
  <div className={styles.wrapper}>
    <Rank rank={rank} />
    <Avatar url={url} avatar={avatar} />
    <div className={styles.contents}>
      <div className={styles.mainContents}>
        <DeveloperArea>
          <UserLink url={url} name={name} />
          <UsernameLink url={url} username={username} />
        </DeveloperArea>
        <PopularRepoArea>
          <RepoTitle />
          <RepoLink
            url={popularRepository.url}
            repositoryName={popularRepository.repositoryName}
          />
          {popularRepository.description && (
            <RepoDescription description={popularRepository.description} />
          )}
        </PopularRepoArea>
      </div>
      <FloatingButtons>
        <SponsorButton />
        <FollowButton />
      </FloatingButtons>
    </div>
  </div>
);

export default DeveloperBage;
