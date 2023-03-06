import React from "react";
import styles from "./LocationSelect.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

export const LocationSelect = () => {
  return (
    <div className={styles.location}>
      <CiLocationOn className={styles.location__icon} />

      <div className={styles.location__select}>
        <div className={styles.location__select__wrapper}>
          <p className={styles.location__select__region}>Lokasi</p>
          <select>
            <option value={"Indonesia, Yogyakarta"}>
              Indonesia, Yogyakarta
            </option>
          </select>
        </div>

        <IoMdArrowDropdown />
      </div>
    </div>
  );
};
