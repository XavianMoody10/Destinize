import React from "react";
import styles from "./Testimonial.module.css";
import image1 from "../../assets/testimonies/image1.png";
import image2 from "../../assets/testimonies/image2.png";
import image3 from "../../assets/testimonies/image3.png";
import ratingImage from "../../assets/testimonies/stars.png";

export const Testimonial = () => {
  // Testimonies array
  const testimonies = [
    {
      id: 0,
      image: image1,
      testimony:
        "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
      name: "Sandhika Galih",
      from: "Dosen di WPU",
    },
    {
      id: 1,
      image: image2,
      testimony:
        "Destinize membantu saya mendapatkan jodoh, tidak disangka bahwa jodoh saya adalah CS nya",
      name: "Syauqizaidan Khairan Khalaf",
      from: "Mahasiswa di WPU",
    },
    {
      id: 2,
      image: image3,
      testimony:
        "Bikini Bottom menjadi sangat ramai dikunjungi saat saya  memasukkannya di Destinize",
      name: "Petrik Sesat",
      from: "Warga di Bikini Bottom",
    },
  ];

  // Testimonial cards display using map array method
  const testimoniesMap = testimonies.map(
    ({ id, image, testimony, name, from }) => {
      return (
        <div className={styles.testimony__card} key={id}>
          <img className={styles.pic} src={image} alt="pic" height={149} />
          <p className={styles.testimony}>{testimony}</p>
          <img src={ratingImage} alt="rate" height={22} />
          <p className={styles.testimony__name}>{name}</p>
          <p className={styles.testimony__from}>{from}</p>
        </div>
      );
    }
  );

  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonial__wrapper}>
        <div className={styles.testimonial__text}>
          <h2 className={styles.testimonial__header}>
            <span>TESTIMONIAL DESTINIZE</span>
            <span>💬 • Apa Kata Mereka Tentang Kami</span>
          </h2>

          <p className={styles.testimonial__info}>
            Penasaran apa saja review dari pengguna yang memakai aplikasi dan
            website Destinize buat nentuin kemana liburan mereka selanjutnya?
            Yuk cek dibawah!
          </p>
        </div>

        <div className={styles.testimonies}>{testimoniesMap}</div>
      </div>
    </section>
  );
};
