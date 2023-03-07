import React from "react";
import styles from "./FAQTable.module.css";

export const FAQTable = ({ children }) => {
  return <ul className={styles.faqs}>{children}</ul>;
};
