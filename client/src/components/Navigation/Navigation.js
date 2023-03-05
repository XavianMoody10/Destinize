import React from "react";
import styles from "./Navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

export const Navigation = () => {
  const navLinks = [
    "Gungung",
    "Paintai",
    "Kuliner",
    "Outbond",
    "Sejerah",
    "Edukasi",
    "Romantis",
    "Alam",
  ];

  const linksMap = navLinks.map((link) => {
    return (
      <li key={link} className={styles.navigation__item}>
        {link} <IoIosArrowDown></IoIosArrowDown>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul className={styles.navigation}>{linksMap}</ul>
      <div className={styles.navigation__icons}>
        <TbTrash className={styles.navigation__icons__trash} />
        <BsPerson className={styles.navigation__icons__user} />
      </div>
    </React.Fragment>
  );
};
