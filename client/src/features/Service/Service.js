import React from "react";
import styles from "./Service.module.css";
import { BsArrowRight } from "react-icons/bs";
import backgroundImage from "../../assets/customer_service_image.png";

export const Service = () => {
  return (
    <div className={styles.service}>
      <div className={styles.service__banner}>
        <div className={styles.service__banner__text}>
          <h3>Masih bingung cari tempat yang cocok? 🤔</h3>
          <p>
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </p>
          <p>
            Mulai sekarang <BsArrowRight />
          </p>
        </div>

        <img src={backgroundImage} alt="service__bg" height={100} />
      </div>
    </div>
  );
};
