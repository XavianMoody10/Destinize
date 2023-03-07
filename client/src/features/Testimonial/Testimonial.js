import React from "react";
import styles from "./Testimonial.module.css";
import image1 from "../../assets/testimonies/image1.png";
import image2 from "../../assets/testimonies/image2.png";
import image3 from "../../assets/testimonies/image3.png";
import ratingImage from "../../assets/testimonies/stars.png";

export const Testimonial = () => {
  const testimonies = [
    {
      image: image1,
      testimony:
        "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
      name: "Sandhika Galih",
      from: "Dosen di WPU",
    },
    {
      image: image2,
      testimony:
        "Destinize membantu saya mendapatkan jodoh, tidak disangka bahwa jodoh saya adalah CS nya",
      name: "Syauqizaidan Khairan Khalaf",
      from: "Mahasiswa di WPU",
    },
    {
      image: image3,
      testimony:
        "Bikini Bottom menjadi sangat ramai dikunjungi saat saya  memasukkannya di Destinize",
      name: "Petrik Sesat",
      from: "Warga di Bikini Bottom",
    },
  ];

  const testimoniesMap = testimonies.map(({ image, testimony, name, from }) => {
    return (
      <div className={styles.testimony__card}>
        <img className={styles.pic} src={image} alt="pic" height={149} />
        <p className={styles.testimony}>{testimony}</p>
        <img className={styles.rate} src={ratingImage} alt="rate" height={22} />
        <p className={styles.testimony__name}>{name}</p>
        <p className={styles.testimony__from}>{from}</p>
      </div>
    );
  });

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
