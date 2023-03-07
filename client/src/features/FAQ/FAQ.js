import React from "react";
import styles from "./FAQ.module.css";
import { PrimaryHeader } from "../../components/PrimaryHeader/PrimaryHeader";
import { FAQItem } from "../../components/FAQItem/FAQItem";
import { FAQTable } from "../../components/FAQTable/FAQTable";

export const FAQ = () => {
  const faqs = [
    {
      id: 0,
      question: "Kenapa ya pembayaranku gagal banh? 😁",
      answer:
        "Lorem ipsum dolor sit amet, illud nonumes concludaturque ei vim. Nostro legimus percipit mel ne. Pertinax atomorum pri ei, et ius nostrud dolorem. Enim sententiae vis ut, causae liberavisse ex eos.",
    },
    {
      id: 1,
      question: "Apakah rehan wangsaff adalah CEO dari Destinize? 😅😅😅",
      answer:
        "Lorem ipsum dolor sit amet, velit veritus id nec, mollis partiendo mei te. Nobis fabulas ut sit. Usu quaeque discere perpetua eu, has at vidit iudico tempor. Cu vix nullam fierent consequat, saperet omittam facilisi usu ad. Te quo zril gubergren necessitatibus, ius noster principes assueverit an.",
    },
    {
      id: 2,
      question: "Afa iyah bang? Gapeduli 👆🏻😅",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh",
    },
    {
      id: 4,
      question: "Apa rekomendasi tempat buat orang yang jomblo? 😥",
      answer:
        "Lorem ipsum dolor sit amet, vocent phaedrum adolescens te eos, nam scribentur mediocritatem vituperatoribus cu, ea vidit albucius sea. Sed ei posidonium scripserit, odio affert persecuti vel et. Copiosae deserunt elaboraret eum et, mei quis solum vocibus ne, pri eu case atqui graece. In quo solum propriae ponderum, purto unum voluptua id pro. Vel dicat argumentum voluptatibus id. Eam dicta argumentum at, vix odio illum altera eu.",
    },
  ];

  // FAQS display using maps array method
  const faqsMap = faqs.map(({ id, question, answer }) => {
    return <FAQItem key={id} question={question} answer={answer}></FAQItem>;
  });

  return (
    <section className={styles.faq}>
      <div className={styles.faq__wrapper}>
        <PrimaryHeader
          category={"FREQUENTLY ASKED QUESTION"}
          heading={"🤔• Pertanyaan yang Sering Diajukan"}
          row
        ></PrimaryHeader>

        <FAQTable>{faqsMap}</FAQTable>
      </div>
    </section>
  );
};
