import React from "react";
import { IoPerson } from "react-icons/io5";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  return contact ? (
    <div className={styles.contact}>
      <IoPerson className={styles.icon} />
      {contact}
    </div>
  ) : null;
};

export default Contact;
