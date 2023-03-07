import React, { useRef, useState } from "react";
import styles from "./GalleryVideo.module.css";
import galleryVideo from "../../assets/gallery_video.mp4";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const GalleryVideo = () => {
  const vidRef = useRef();
  const [played, isPlayed] = useState(true);

  const toggleVideo = () => {
    if (vidRef.current.paused) {
      vidRef.current.play();
      isPlayed(true);
    } else {
      vidRef.current.pause();
      isPlayed(false);
    }
  };

  return (
    <div className={styles.gallery__video}>
      <video src={galleryVideo} muted autoPlay loop ref={vidRef} />
      <button onClick={toggleVideo}>
        {played ? (
          <BsPauseFill fontSize={50} />
        ) : (
          <BsFillPlayFill fontSize={50} />
        )}
      </button>
    </div>
  );
};
