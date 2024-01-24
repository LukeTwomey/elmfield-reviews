import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import styles from "./TradeTile.module.css";

const TradeTile = ({ trade, icon, onClick, selectedTrade }) => {
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
      onClick={() => onClick(trade)}
    >
      <div className={styles.icon}>{icon}</div> {trade}
    </div>
  );
};

export default TradeTile;
