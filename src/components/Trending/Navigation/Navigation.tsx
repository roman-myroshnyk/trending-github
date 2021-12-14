// react
import React from "react";
// components
import { NavLink } from "react-router-dom";
// styles
import styles from "./Navigation.module.css";

const TrendingNavigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={styles.navButton}
        activeClassName={styles.navButtonActive}
        to="/repositories"
      >
        Repositories
      </NavLink>
      <NavLink
        className={styles.navButton}
        activeClassName={styles.navButtonActive}
        to="/developers"
      >
        Developers
      </NavLink>
    </nav>
  );
};

export default TrendingNavigation;
