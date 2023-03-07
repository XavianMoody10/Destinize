import React from "react";
import styles from "./Blog.module.css";
import { GalleryCard } from "../../components/GalleryCard/GalleryCard";
import { GalleryVideo } from "../../components/GalleryVideo/GalleryVideo";
import { GalleryBanner } from "../../components/GalleryBanner/GalleryBanner";
import { PrimaryHeader } from "../../components/PrimaryHeader/PrimaryHeader";

export const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__wrapper}>
        <PrimaryHeader
          category={"MENGENAL DESTINIZE"}
          heading={"🖼• Galeri Pariwisata & Blog Travel"}
          row
        />

        <div className={styles.blog__grid}>
          <GalleryCard></GalleryCard>
          <GalleryVideo></GalleryVideo>
          <GalleryBanner></GalleryBanner>
        </div>
      </div>
    </div>
  );
};
