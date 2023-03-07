import React from "react";
import styles from "./GalleryCard.module.css";
import galleryImage from "../../assets/destinations/image4.png";

export const GalleryCard = () => {
  return (
    <div className={styles.gallery__card}>
      <img src={galleryImage} alt="gallery_image"></img>

      <div className={styles.info}>
        <p>26 DESEMBER 2021</p>
        <p>Tips naik gunung Bromo Biar gak capek cyin 😥😛</p>
        <p>Jadi gini gann, anda tau bromo? yaaa gunung kann!</p>
        <p>Baca selengkapnya ..</p>
      </div>
    </div>
  );
};
