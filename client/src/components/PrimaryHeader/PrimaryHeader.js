import React from "react";
import styles from "./PrimaryHeader.module.css";
import { IoIosArrowForward } from "react-icons/io";

export const PrimaryHeader = ({ category, heading, row, info }) => {
  return (
    <React.Fragment>
      {row ? (
        <div className={styles.header__wrapper__row}>
          <h2 className={styles.header__row}>
            <span>{category}</span>
            <span>{heading}</span>
          </h2>

          <p>
            Lihat semua
            <IoIosArrowForward className={styles.header__arrow} />
          </p>
        </div>
      ) : (
        <div className={styles.header__wrapper__column}>
          <h2 className={styles.header__column}>
            <span>{category}</span>
            <span>{heading}</span>
          </h2>

          {info ? <p className={styles.info}>{info}</p> : null}
        </div>
      )}
    </React.Fragment>
  );
};
