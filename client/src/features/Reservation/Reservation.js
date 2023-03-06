import React from "react";
import styles from "./Reservation.module.css";
import reservationImage from "../../assets/reservation_image.png";

export const Reservation = () => {
  return (
    <div className={styles.reservation}>
      <div className={styles.reservation__wrapper}>
        <div className={styles.reservation__text}>
          <p className={styles.reservation__category}>RESERVASI TEMPAT</p>
          <h2>Gak mau ngantri? reservasi aja! 🤙🏻</h2>

          <ul>
            <li>
              <div className={styles.reservation__text__icon}>🔎</div>
              <p>
                <span>Cari tempat yang kamu mau</span>
                <span>
                  Temukan destinasi selanjutnya yang akan kamu kunjungi dengan
                  Destinize
                </span>
              </p>
            </li>
            <li>
              <div className={styles.reservation__text__icon}>✏</div>
              <p>
                <span>Isi data dan konfirmasi pembayaran</span>
                <span>
                  Tulis dan lengkapi data kamu untuk keperluan data booking
                </span>
              </p>
            </li>
            <li>
              <div className={styles.reservation__text__icon}>😍</div>
              <p>
                <span>Tinggal masuk dan enjoy!</span>
                <span>
                  Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan
                </span>
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.reservation__image}>
          <div className={styles.reservation__image__shadow}></div>
          <img src={reservationImage} alt="reservation_image" height={500} />
        </div>
      </div>
    </div>
  );
};
