import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import RepositoriesPage from "./pages/TrendingRepositoriesPage/TrendingRepositoriesPage";
import DevelopersPage from "./pages/TrendingDevelopersPage/TrendingDevelopersPage";

// styles
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/repositories/:language?">
            <RepositoriesPage />
          </Route>
          <Route path="/developers/:language?">
            <DevelopersPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
