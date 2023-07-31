"use client";
import React, { useState } from "react";

import styles from "../../styles/accordion.module.scss";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        <h4>{question}</h4>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div
          style={{ paddingBottom: "1.3rem", width: "85%" }}
          className={styles.accordionContent}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
