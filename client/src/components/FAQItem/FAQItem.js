import React, { useState } from "react";
import styles from "./FAQItem.module.css";
import { IoIosArrowForward } from "react-icons/io";

export const FAQItem = ({ question, answer }) => {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <li className={styles.faq__item}>
      {!showFAQ ? (
        <div className={styles.faqs__question}>
          <p>{question}</p>
          <IoIosArrowForward
            className={styles.faqs__arrow}
            onClick={() => {
              setShowFAQ(true);
            }}
          />
        </div>
      ) : (
        <div className={styles.faqs__answer}>
          <div className={styles.faqs__answer__header}>
            <p>{question}</p>
            <IoIosArrowForward
              className={styles.faqs__arrow__open}
              onClick={() => {
                setShowFAQ(false);
              }}
            />
          </div>

          <p className={styles.faqs__answer__statement}>{answer}</p>
        </div>
      )}
    </li>
  );
};
