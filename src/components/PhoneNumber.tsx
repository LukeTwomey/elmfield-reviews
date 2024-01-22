import React from "react";
import styles from "./PhoneNumber.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneNumber = ({ number }) => {
  return (
    <div className={styles.phone}>
      <a href={`tel:${number}`} className={styles.number}>
        <div className={styles.phoneIcon}>
          <FaPhoneAlt />
        </div>{" "}
        {number}
      </a>
    </div>
  );
};

export default PhoneNumber;
