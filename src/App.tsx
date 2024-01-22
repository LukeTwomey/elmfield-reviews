import "./App.css";
import { useState } from "react";
import CompanyList from "./components/CompanyList";
import TradeTiles from "./components/TradeTiles";

function App() {
  const [selectedTrade, setTrade] = useState();

  const handleClick = (trade) => {
    setTrade(trade);
  };

  return (
    <>
      <h1>Elmfield Reviews</h1>
      <h2>
        Select a trade to view recommendations from Elmfield Road residents
      </h2>
      <TradeTiles handleClick={handleClick} selectedTrade={selectedTrade} />
      <CompanyList selectedTrade={selectedTrade} />
    </>
  );
}

export default App;