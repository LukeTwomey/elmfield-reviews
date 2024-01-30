import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./Email.module.css";

const Email = ({ email }) => {
  return email ? (
    <div className={styles.email}>
      <a href={`mailto:${email}`} className={styles.link}>
        <div className={styles.icon}>
          <HiOutlineMail />
        </div>
        {email}
      </a>
    </div>
  ) : null;
};

export default Email;
