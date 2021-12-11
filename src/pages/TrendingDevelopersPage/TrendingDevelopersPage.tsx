import React from "react";
import Controls from "../../components/Trending/Controls/Controls";

const DevelopersPage: React.FC = () => (
  <div>
    <header>
      <h1>Trending</h1>
      <p>These are the developers building the hot tools today.</p>
    </header>
    <div>
      <Controls />
      <div>DevelopersPage</div>
    </div>
  </div>
);

export default DevelopersPage;
