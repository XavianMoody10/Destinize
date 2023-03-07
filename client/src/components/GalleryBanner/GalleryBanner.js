import React from "react";
import styles from "./GalleryBanner.module.css";
import bannerBackground from "../../assets/gallery_bg.jpg";

export const GalleryBanner = () => {
  return (
    <div
      className={styles.gallery__banner}
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <div className={styles.text}>
        <p>Tips meminum air kawah biar lidah melepuh 😁</p>
        <p>
          Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi untuk
          di minum.. rasakan kepanasan yang brutal 🔥
        </p>
        <ul>
          <li>Google</li>
          <li>Trending</li>
          <li>Baru</li>
        </ul>
      </div>
    </div>
  );
};
