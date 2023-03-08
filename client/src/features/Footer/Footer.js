import React from "react";
import styles from "./Footer.module.css";
import icon from "../../assets/footer_icon.png";
import { BiPhoneCall } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiPrinterLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__contact}>
          <img src={icon} alt="icon" height={30} />
          <h4>Destinize</h4>
          <p>
            Destinize adalah website atau layanan aplikasi yang membantu kamu
            memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’
            agar lebih dikenal dan ramai <span>Baca Selengkapnya</span>
          </p>
          <ul>
            <li>
              <BiPhoneCall className={styles.footer__contact__icon} />
              <p>0851-5616-2840</p>
            </li>
            <li>
              <RxEnvelopeClosed className={styles.footer__contact__icon} />
              <p>syaokay@gmail.com</p>
            </li>
            <li>
              <HiOutlineLocationMarker
                className={styles.footer__contact__icon}
              />
              <p>Ciamis, Jawa Barat. Indonesia</p>
            </li>
            <li>
              <RiPrinterLine className={styles.footer__contact__icon} />
              <p>+1-212-9876543</p>
            </li>
          </ul>
        </div>

        <div className={styles.footer__links}>
          <ul>
            <li>Tentang</li>
            <li>Tentang Kami</li>
            <li>Blog</li>
            <li>Karir</li>
            <li>Pekerjaan</li>
            <li>Berita</li>
            <li>Galeri</li>
            <li>Afiliasi</li>
          </ul>

          <ul>
            <li>Support</li>
            <li>Kontak Kami</li>
            <li>Online Chat</li>
            <li>Whatsapp</li>
            <li>Telegram</li>
            <li>Tiket</li>
            <li>Call Center</li>
            <li>Bantuan</li>
          </ul>

          <ul>
            <li>FAQ</li>
            <li>Akun</li>
            <li>Organisir</li>
            <li>Order</li>
            <li>Pembayaran</li>
            <li>Pengembalian</li>
            <li>Copyright</li>
            <li>Bahasa</li>
          </ul>
        </div>

        <div className={styles.footer__bottom}>
          <p>© 2021-2022, All Rights Reserved</p>
          <ul>
            <li>Tentang Kami</li>
            <li>Kontak</li>
            <li>Privasi & policy</li>
            <li>Sitemap</li>
            <li>Panduan Pengunaan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
