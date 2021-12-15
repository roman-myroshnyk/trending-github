import React from "react";
import { useParams } from "react-router-dom";
// components
import Navigation from "../Navigation/Navigation";
// utils
import useQueryParams from "../../../utils/useQueryParams";

const TrendingListControls: React.FC = () => {
  const query = useQueryParams();
  const { language = "Any" } = useParams<{ language: string }>();
  return (
    <div>
      <Navigation />
      <div>Spoken Language: {query.get("spoken_language_code")}</div>
      <div>Language: {language}</div>
      <div>Date range: {query.get("since")}</div>
    </div>
  );
};

export default TrendingListControls;
