import React from "react";
import { TbWorldWww } from "react-icons/tb";
import styles from "./Website.module.css";

const Website = ({ website }) => {
  return website ? (
    <div className={styles.website}>
      <a href={website} className={styles.link}>
        <div className={styles.icon}>
          <TbWorldWww />
        </div>
        {website}
      </a>
    </div>
  ) : null;
};

export default Website;
