import React from "react";
import styles from "./TradeTiles.module.css";
import TradeTile from "./TradeTile";
import {
  MdPlumbing,
  MdOutlineElectricalServices,
  MdRoofing,
  MdConstruction,
} from "react-icons/md";
import { GiGardeningShears, GiKeyLock, GiVacuumCleaner } from "react-icons/gi";
import { RiPaintBrushFill } from "react-icons/ri";

const TradeTiles = ({ handleClick, selectedTrade }) => {
  return (
    <div className={styles.tiles}>
      <TradeTile
        trade="Plumber"
        icon={<MdPlumbing />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Electrician"
        icon={<MdOutlineElectricalServices />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Roofer"
        icon={<MdRoofing />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Builder"
        icon={<MdConstruction />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Gardener"
        icon={<GiGardeningShears />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Painter"
        icon={<RiPaintBrushFill />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Locksmith"
        icon={<GiKeyLock />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
      <TradeTile
        trade="Cleaner"
        icon={<GiVacuumCleaner />}
        clickHandler={handleClick}
        selectedTrade={selectedTrade}
      />
    </div>
  );
};

export default TradeTiles;
