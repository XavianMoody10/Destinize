import React from "react";
import styles from "./Partnership.module.css";
import logo1 from "../../assets/partnerships/logo1.png";
import logo2 from "../../assets/partnerships/logo2.png";
import logo3 from "../../assets/partnerships/logo3.png";
import logo4 from "../../assets/partnerships/logo4.png";
import logo5 from "../../assets/partnerships/logo5.png";

export const Partnership = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  const logosMap = logos.map((logo) => {
    return (
      <img
        key={logo}
        className={styles.partnership__image}
        src={logo}
        alt="partner logo"
      />
    );
  });

  return (
    <section className={styles.partnership}>
      <div className={styles.partnership__wrapper}>{logosMap}</div>
    </section>
  );
};
