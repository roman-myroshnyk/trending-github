// react
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// context
import TrendingContextProvider from "./context/TrendingContext";
// pages
import RepositoriesPage from "./pages/TrendingRepositoriesPage/TrendingRepositoriesPage";
import DevelopersPage from "./pages/TrendingDevelopersPage/TrendingDevelopersPage";
// styles
import "./App.css";

// react-query client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TrendingContextProvider>
          <main className="App">
            <Switch>
              <Route path="/repositories/:language?">
                <RepositoriesPage />
              </Route>
              <Route path="/developers/:language?">
                <DevelopersPage />
              </Route>
            </Switch>
          </main>
        </TrendingContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
