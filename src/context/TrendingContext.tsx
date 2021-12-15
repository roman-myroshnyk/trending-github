// react
import React, { createContext, useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  generatePath,
} from "react-router-dom";
// constants
import { dateRanges, defaultDateRange, IDateRage } from "../const/dateRange";
import { languages, defaultLanguage, ILanguage } from "../const/languages";
import {
  spokenLanguages,
  defaultSpokenLanguage,
  ISpokenLanguage,
} from "../const/spokenLanguages";

interface ITrendingContext {
  dateRange: IDateRage;
  updateDateRange: (sinceQueryParam: string) => void;
  language: ILanguage;
  updateLanguage: (languageParam?: string) => void;
  spokenLanguage: ISpokenLanguage;
  updateSpokenLanguage: (spokenLanguageCode?: string) => void;
}

// context
export const TrendingContext = createContext<ITrendingContext>({
  dateRange: defaultDateRange,
  updateDateRange: () => {
    console.log("udateDateRage for tests");
  },
  language: defaultLanguage,
  updateLanguage: () => {
    console.log("updateLanguage for tests");
  },
  spokenLanguage: defaultSpokenLanguage,
  updateSpokenLanguage: () => {
    console.log("updateSpokenLanguage for tests");
  },
});

// context provider
const TrendingContextProvider: React.FC = ({ children }) => {
  // router location
  const location = useLocation();
  // router history
  const history = useHistory();
  // router query
  const query = new URLSearchParams(location.search);
  // get parameters from path
  const match = useRouteMatch<{
    language: string | undefined;
    page: "repositories" | "developers";
  }>("/:page(repositories|developers)/:language?");

  // validate and set state when url changes
  useEffect(() => {
    checkAndSetDateRange();
    checkAndSetLanguage();
    checkAndSetSpokenLanguage();
  }, [location]);

  // validate and set state for dateRages param
  const checkAndSetDateRange = () => {
    const sinceQueryParam = query.get("since");
    const dateRange = dateRanges.find((range) => {
      return range.dateType == sinceQueryParam;
    });
    setDateRange(dateRange || defaultDateRange);
  };

  // update url when value for dateRange in drop-down changes
  const updateDateRange = (sinceQueryParam: string) => {
    query.set("since", sinceQueryParam);
    history.push({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  // dateRange state
  const [dateRange, setDateRange] = useState<IDateRage>(defaultDateRange);

  // validate adn set state for language
  const checkAndSetLanguage = () => {
    const languageParam = match?.params.language;
    const language = languages.find((language) => {
      return language.code == languageParam;
    });
    setLanguage(language || defaultLanguage);
  };

  // update url when value for dateRange in drop-down changes
  const updateLanguage = (languageParam?: string) => {
    if (match) {
      const pathname = generatePath(
        "/:page(repositories|developers)/:language?",
        {
          page: match.params.page,
          language: languageParam,
        }
      );
      history.push({
        pathname,
        search: query.toString(),
      });
    }
  };

  // programming language state
  const [language, setLanguage] = useState<ILanguage>({
    code: undefined,
    language: "Any",
  });

  // validate and set state for spoken language
  const checkAndSetSpokenLanguage = () => {
    const spokenLanguageQueryParam = query.get("spoken_language_code");
    const spokenLanguage = spokenLanguages.find((spokenLanguage) => {
      return spokenLanguage.code == spokenLanguageQueryParam;
    });
    setSpokenLanguage(spokenLanguage || defaultSpokenLanguage);
  };

  // update url when value for spoken languages in drop-down changes
  const updateSpokenLanguage = (spokenLanguageCode?: string) => {
    if (spokenLanguageCode) {
      query.set("spoken_language_code", spokenLanguageCode);
    } else {
      query.delete("spoken_language_code");
    }
    history.push({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  // spoken language state
  const [spokenLanguage, setSpokenLanguage] = useState<ISpokenLanguage>(
    defaultSpokenLanguage
  );

  return (
    <TrendingContext.Provider
      value={{
        dateRange,
        updateDateRange,
        language,
        updateLanguage,
        spokenLanguage,
        updateSpokenLanguage,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;
