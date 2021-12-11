import React from "react";
import Controls from "../../components/Trending/Controls/Controls";

const RepositoriesPage: React.FC = () => (
  <div>
    <header>
      <h1>Trending</h1>
      <p>See what the GitHub community is most excited about today.</p>
    </header>
    <div>
      <Controls />
      <div>Repositories Page</div>
    </div>
  </div>
);

export default RepositoriesPage;
