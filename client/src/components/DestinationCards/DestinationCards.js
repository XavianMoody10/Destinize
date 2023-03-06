import React from "react";
import styles from "./DestinationCards.module.css";

export const DestinationCards = ({ image, location, island }) => {
  return (
    <div
      className={styles.destinations__favorites}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className={styles.destinations__favorites__place}>
        <span>{location}</span>
        <span>{island}</span>
      </p>
    </div>
  );
};
