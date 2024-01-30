import React from "react";
import TradeTile from "./TradeTile";
import styles from "./TradeTiles.module.css";
import {
  MdPlumbing,
  MdOutlineElectricalServices,
  MdRoofing,
  MdConstruction,
} from "react-icons/md";
import { GiGardeningShears, GiKeyLock, GiVacuumCleaner } from "react-icons/gi";
import { RiPaintBrushFill } from "react-icons/ri";

const TradeTiles = ({ onClick, selectedTrade }) => {
  const trades = [
    { trade: "Plumber", icon: <MdPlumbing /> },
    { trade: "Electrician", icon: <MdOutlineElectricalServices /> },
    { trade: "Roofer", icon: <MdRoofing /> },
    { trade: "Builder", icon: <MdConstruction /> },
    { trade: "Gardener", icon: <GiGardeningShears /> },
    { trade: "Painter", icon: <RiPaintBrushFill /> },
    { trade: "Locksmith", icon: <GiKeyLock /> },
    { trade: "Cleaner", icon: <GiVacuumCleaner /> },
  ];

  const renderTiles = trades.map((trade) => {
    return (
      <TradeTile
        trade={trade.trade}
        icon={trade.icon}
        onClick={onClick}
        selectedTrade={selectedTrade}
        key={trade.trade}
      />
    );
  });

  return <div className={styles.tiles}>{renderTiles}</div>;
};

export default TradeTiles;
