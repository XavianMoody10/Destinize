import React from "react";
import styles from "./Destinations.module.css";
import image1 from "../../assets/destinations/image1.png";
import image2 from "../../assets/destinations/image2.png";
import image3 from "../../assets/destinations/image3.png";
import image4 from "../../assets/destinations/image4.png";
import { DestinationCards } from "../../components/DestinationCards/DestinationCards";
import { PrimaryHeader } from "../../components/PrimaryHeader/PrimaryHeader";

export const Destinations = () => {
  const destinations = [
    {
      image: image1,
      location: "Raja Ampat",
      island: "Bali",
    },
    {
      image: image2,
      location: "Labuan Bajo",
      island: "NTT",
    },
    {
      image: image3,
      location: "Kawah Ijen",
      island: "Jawa Timur",
    },
    {
      image: image4,
      location: "Bromo",
      island: "Jawa Timur",
    },
  ];

  // Destination map
  const destimationMap = destinations.map(({ image, location, island }) => {
    return (
      <DestinationCards
        key={location}
        image={image}
        location={location}
        island={island}
      ></DestinationCards>
    );
  });

  return (
    <section className={styles.destinations}>
      <div className={styles.destinations__wrapper}>
        <PrimaryHeader
          category={"DESTINASI FAVORIT"}
          heading={"✈ • Temukan Destinasi Favoritmu"}
          row
        ></PrimaryHeader>

        <div className={styles.destinations__favorites__wrapper}>
          {destimationMap}
        </div>
      </div>
    </section>
  );
};
