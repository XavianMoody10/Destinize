import React from "react";
import styles from "./LanguageSelect.module.css";
import { CiGlobe } from "react-icons/ci";

export const LanguageSelect = () => {
  return (
    <div className={styles.language}>
      <CiGlobe className={styles.language__globe} />
      <select className={styles.language__select}>
        <option
          className={styles.language__select__option}
          value="Bohasa Indonesia"
        >
          Bohasa Indonesia
        </option>
      </select>
    </div>
  );
};
