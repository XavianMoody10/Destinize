import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Logo.png";
import { SearchTextField } from "../../components/SearchTextField/SearchTextField";
import { LanguageSelect } from "../../components/LanguageSelect/LanguageSelect";
import { LocationSelect } from "../../components/LocationSelect/LocationSelect";
import { Navigation } from "../../components/Navigation/Navigation";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <img className={styles.header__top__image} src={logo} alt="logo" />
        <SearchTextField></SearchTextField>
        <LanguageSelect></LanguageSelect>
        <LocationSelect></LocationSelect>
      </div>

      <div className={styles.header__bottom}>
        <Navigation></Navigation>
      </div>
    </header>
  );
};
