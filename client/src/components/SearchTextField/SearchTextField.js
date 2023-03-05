import React from "react";
import styles from "./SearchTextField.module.css";
import { CiSearch } from "react-icons/ci";

export const SearchTextField = () => {
  return (
    <div className={styles.searchbar}>
      <CiSearch className={styles.searchbar__icon} />
      <input placeholder="Cari apapun disini"></input>
    </div>
  );
};
