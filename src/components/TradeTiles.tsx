import React from "react";
import TradeTile from "./TradeTile";
import styles from "./TradeTiles.module.css";
import {
  MdPlumbing,
  MdOutlineElectricalServices,
  MdRoofing,
  MdConstruction,
} from "react-icons/md";
import {
  GiGardeningShears,
  GiKeyLock,
  GiVacuumCleaner,
  GiHandSaw,
} from "react-icons/gi";
import { RiPaintBrushFill } from "react-icons/ri";

const TradeTiles = ({ onClick, selectedTrade }) => {
  const trades = [
    { trade: "Builder", icon: <MdConstruction /> },
    { trade: "Carpenter", icon: <GiHandSaw /> },
    // { trade: "Cleaner", icon: <GiVacuumCleaner /> },
    // { trade: "Electrician", icon: <MdOutlineElectricalServices /> },
    // { trade: "Gardener", icon: <GiGardeningShears /> },
    // { trade: "Locksmith", icon: <GiKeyLock /> },
    // { trade: "Plumber", icon: <MdPlumbing /> },
    { trade: "Roofer", icon: <MdRoofing /> },
    { trade: "Painter", icon: <RiPaintBrushFill /> },
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
