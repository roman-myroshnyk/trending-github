// axios and react-query
import { useQuery } from "react-query";
import axios from "axios";
// proxy
import { PROXY_URL } from "../const/proxy";
// interfaces
import { IRepository, ProgrammingLanguages } from "./interfaces";
import { DateTypes } from "./interfaces";
import { SpokenLanguagesCodes } from "./interfaces";

// query repositories
const getTrendingRepositories = async (
  dateRange: DateTypes,
  spokenLanguage?: SpokenLanguagesCodes,
  language?: ProgrammingLanguages
) => {
  const { data } = await axios.get(
    `${PROXY_URL}https://gh-trending-api.herokuapp.com/repositories${
      language ? `/${language}` : ""
    }?`,
    {
      params: {
        since: dateRange,
        spoken_language_code: spokenLanguage,
      },
    }
  );
  return data;
};

// repositories hook
export default function useTrendingRepositories(
  dateRange: DateTypes,
  spokenLanguage?: SpokenLanguagesCodes,
  language?: ProgrammingLanguages
) {
  return useQuery<IRepository[]>(
    ["repositories", language, spokenLanguage, dateRange],
    () => getTrendingRepositories(dateRange, spokenLanguage, language)
  );
}
