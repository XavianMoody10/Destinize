import React from "react";
import styles from "./Attractions.module.css";
import mapImage from "../../assets/map.png";
import { MdAddLocationAlt, MdGroups } from "react-icons/md";
import { BsFillSuitHeartFill } from "react-icons/bs";

export const Attractions = () => {
  return (
    <div className={styles.attractions}>
      <div className={styles.attractions__wrapper}>
        <h2 className={styles.attractions__header}>
          <span>CARI TEMPAT WISATA</span>
          <span>🗺 • Cari Tempat Wisata Didekatmu</span>
        </h2>

        <p className={styles.attractions__info}>
          Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
          yang sedang populer di daerah kamu dengan begitu kamu akan selalu
          update dan gak kudet lagi 👍🏻
        </p>

        <img
          className={styles.attractions__image}
          src={mapImage}
          alt="map"
        ></img>

        <ul className={styles.attractions__list}>
          <li>
            <MdAddLocationAlt className={styles.attractions__list__icon} />
            <p>
              <span>Populer di dekatmu</span>
              <span>
                Tempat pariwisata yang populer dan pasti dikenal semua orang
                didekatmu
              </span>
            </p>
          </li>

          <li>
            <BsFillSuitHeartFill className={styles.attractions__list__icon} />
            <p>
              <span>Favorit di dekatmu</span>
              <span>
                Tempat favorit dan disukai semua orang orang di sekitar daerah
                kamu
              </span>
            </p>
          </li>

          <li>
            <MdGroups className={styles.attractions__list__icon} />
            <p>
              <span>Ramai di didekatmu</span>
              <span>
                Spot yang paling ramai dikunjungi para warga sekaligus para
                wisatawan
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
