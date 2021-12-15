// axios and react-qury
import { useQuery } from "react-query";
import axios from "axios";
// proxy
import { PROXY_URL } from "../const/proxy";

// interfaces
import { IDeveloper } from "./interfaces";
import { ProgrammingLanguages } from "./interfaces";
import { DateTypes } from "./interfaces";

// query developers
const getTrendingDevelopers = async (
  dateRange: DateTypes,
  language?: ProgrammingLanguages
) => {
  const { data } = await axios.get(
    `${PROXY_URL}https://gh-trending-api.herokuapp.com/developers${
      language ? `/${language}` : ""
    }?`,
    {
      params: {
        since: dateRange,
      },
    }
  );
  return data;
};

// developers hooks
export default function useTrendingDevelopers(
  dateRange: DateTypes,
  language?: ProgrammingLanguages
) {
  return useQuery<IDeveloper[]>(["developer", language, dateRange], () =>
    getTrendingDevelopers(dateRange, language)
  );
}
