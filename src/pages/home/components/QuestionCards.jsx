import React from "react";

import styles from "./QuestionCards.module.css";
import TagSection from "./TagSection";

const QuestionCards = ({ questionDetails, addToCodesheetHandler }) => {
  const solveButtonHandler = (e) => {
    e.preventDefault();
    window.open(questionDetails.question_url, "_blank");
  };

  return (
    <>
      <div className={styles["question-card"]}>
        <div className={styles["left-section"]}>
          <h1 className={styles["source-name"]}>{questionDetails.source}</h1>
          <h1 className={styles["question-title"]}>{questionDetails.title}</h1>
          <TagSection questionId={questionDetails.id} />
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["buttons"]}>
            <button
              className={styles["solve-button"]}
              onClick={solveButtonHandler}
            >
              Solve
            </button>
            <button
              className={styles["add-button"]}
              onClick={() => addToCodesheetHandler(questionDetails.id)}
            >
              +
            </button>
          </div>
          <div className={styles["extra-details"]}>
            {questionDetails.difficulty}
          </div>
        </div>
      </div>
      <div className={styles["divider__line"]} />
    </>
  );
};

export default QuestionCards;
