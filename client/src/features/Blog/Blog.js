import React from "react";
import styles from "./Blog.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { GalleryCard } from "../../components/GalleryCard/GalleryCard";
import { GalleryVideo } from "../../components/GalleryVideo/GalleryVideo";
import { GalleryBanner } from "../../components/GalleryBanner/GalleryBanner";

export const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__text}>
          <h2 className={styles.blog__header}>
            <span>MENGENAL DESTINIZE</span>
            <span>🖼• Galeri Pariwisata & Blog Travel</span>
          </h2>

          <p>
            Lihat semua
            <IoIosArrowForward className={styles.blog__arrow} />
          </p>
        </div>

        <div className={styles.blog__grid}>
          <GalleryCard></GalleryCard>
          <GalleryVideo></GalleryVideo>
          <GalleryBanner></GalleryBanner>
        </div>
      </div>
    </div>
  );
};
