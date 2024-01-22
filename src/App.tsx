import "./App.css";
import React, { useState } from "react";
import CompanyList from "./components/CompanyList";
import TradeTiles from "./components/TradeTiles";

function App() {
  const [selectedTrade, setTrade] = useState();

  const handleClick = (trade) => {
    setTrade(trade);
  };

  return (
    <>
      <div>
        <h1>Elmfield Reviews</h1>
        <h2>
          Select a trade to view recommendations from Elmfield Road residents
        </h2>
      </div>
      <TradeTiles handleClick={handleClick} selectedTrade={selectedTrade} />
      <CompanyList selectedTrade={selectedTrade} />
    </>
  );
}

export default App;
