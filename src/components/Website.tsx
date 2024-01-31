import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "./Website.module.css";

const Website = ({ website }) => {
  return website ? (
    <div className={styles.website}>
      <a href={website} className={styles.link}>
        <div className={styles.icon}>
          <TbWorldWww />
        </div>
        {website}
        <HiOutlineExternalLink className={styles.external} />
      </a>
    </div>
  ) : null;
};

export default Website;
