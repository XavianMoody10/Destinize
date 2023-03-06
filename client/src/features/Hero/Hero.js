import React from "react";
import styles from "./Hero.module.css";
import { BsFillPlayFill, BsArrowRightShort } from "react-icons/bs";
import heroImage from "../../assets/hero_image.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__text}>
          <p>✈ • Explore the wonderful indonesia!</p>
          <h1>
            Liburan & nikmati <span>tempat baru</span> di indonesia 🏝️
          </h1>
          <p>
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>

          <div className={styles.hero__actions}>
            <button>
              Mulai sekarang
              <BsArrowRightShort className={styles.hero__actions__arrow} />
            </button>
            <button>
              <BsFillPlayFill className={styles.hero__actions__play} />
              Putar Demo
            </button>
          </div>
        </div>

        <img
          className={styles.hero__image}
          src={heroImage}
          alt="hero_image"
        ></img>
      </div>
    </section>
  );
};
