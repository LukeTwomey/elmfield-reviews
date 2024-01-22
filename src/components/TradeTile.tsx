import { useEffect, useState } from "react";
import styles from "./TradeTile.module.css";
import { FaBeer } from "react-icons/fa";

const TradeTile = ({ trade, icon, clickHandler, selectedTrade }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (trade === selectedTrade) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedTrade]);

  return (
    <div
      className={`${styles.tile} ${selected ? styles.selected : null}`}
      onClick={() => clickHandler(trade)}
    >
      <div className={styles.icon}>{icon}</div> {trade}
    </div>
  );
};

export default TradeTile;
