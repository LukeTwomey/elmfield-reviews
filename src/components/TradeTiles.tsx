import React from "react";
import TradeTile from "./TradeTile";
import styles from "./TradeTiles.module.css";
import {
  MdPlumbing,
  MdOutlineElectricalServices,
  MdRoofing,
  MdConstruction,
  MdOutlineWindow,
} from "react-icons/md";
import { GiHandSaw, GiSkeleton, GiGardeningShears } from "react-icons/gi";
import { RiPaintBrushFill } from "react-icons/ri";
import { RxScissors } from "react-icons/rx";
import { LuHardHat } from "react-icons/lu";

const TradeTiles = ({ onClick, selectedTrade }) => {
  const trades = [
    { trade: "Builder", icon: <LuHardHat /> },
    { trade: "Carpenter", icon: <GiHandSaw /> },
    { trade: "Chiropractor", icon: <GiSkeleton /> },
    { trade: "Electrician", icon: <MdOutlineElectricalServices /> },
    { trade: "Gardener", icon: <GiGardeningShears /> },
    { trade: "Hairdresser", icon: <RxScissors /> },
    { trade: "Handyman", icon: <MdConstruction /> },
    { trade: "Painter", icon: <RiPaintBrushFill /> },
    { trade: "Plumber", icon: <MdPlumbing /> },
    { trade: "Roofer", icon: <MdRoofing /> },
    { trade: "Window Fitters", icon: <MdOutlineWindow /> },
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
