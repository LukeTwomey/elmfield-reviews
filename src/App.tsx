import React, { useState } from "react";
import TradeTiles from "./components/TradeTiles";
import CompanyList from "./components/CompanyList";

function App() {
  const [selectedTrade, setSelectedTrade] = useState();

  const selectTrade = (trade) => {
    setSelectedTrade(trade);
  };

  return (
    <>
      <div>
        <h1>Elmfield Reviews</h1>
        <h2>
          Choose a trade to view recommendations from Elmfield Road residents
        </h2>
      </div>
      <TradeTiles onClick={selectTrade} selectedTrade={selectedTrade} />
      <CompanyList selectedTrade={selectedTrade} />
    </>
  );
}

export default App;
