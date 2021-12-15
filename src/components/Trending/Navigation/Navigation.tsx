import React from "react";
import { NavLink } from "react-router-dom";
const TrendingNavigation: React.FC = () => {
  return (
    <nav>
      <NavLink to="/repositories">Repositories</NavLink>
      <NavLink to="/developers">Developers</NavLink>
    </nav>
  );
};

export default TrendingNavigation;
