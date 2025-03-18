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
import {
  GiHandSaw,
  GiSkeleton,
  GiGardeningShears,
  GiKeyLock,
} from "react-icons/gi";
import { RiPaintBrushFill } from "react-icons/ri";
import { RxScissors } from "react-icons/rx";
import { LuHardHat, LuMilk, LuSofa } from "react-icons/lu";
import { FaHouseFloodWater } from "react-icons/fa6";

const TradeTiles = ({ onClick, selectedTrade }) => {
  const trades = [
    { trade: "Builder", icon: <LuHardHat /> },
    { trade: "Carpenter", icon: <GiHandSaw /> },
    { trade: "Chiropractor", icon: <GiSkeleton /> },
    { trade: "Damp Survey", icon: <FaHouseFloodWater /> },
    { trade: "Electrician", icon: <MdOutlineElectricalServices /> },
    { trade: "Gardener", icon: <GiGardeningShears /> },
    { trade: "Hairdresser", icon: <RxScissors /> },
    { trade: "Handyman", icon: <MdConstruction /> },
    { trade: "Locksmith", icon: <GiKeyLock /> },
    { trade: "Milkman", icon: <LuMilk /> },
    { trade: "Painter", icon: <RiPaintBrushFill /> },
    { trade: "Plumber", icon: <MdPlumbing /> },
    { trade: "Roofer", icon: <MdRoofing /> },
    { trade: "Upholsterer", icon: <LuSofa /> },
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
