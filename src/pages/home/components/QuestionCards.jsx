import React from 'react';

import styles from './QuestionCards.module.css';

const QuestionCards = ({ questionDetails }) => {
  const solveButtonHandler = (e) => {
    e.preventDefault();
    window.open(questionDetails.question_url, '_blank');
  };

  return (
    <div className={styles['question-card']}>
      <div className={styles['left-section']}>
        <h1 className={styles['source-name']}>{questionDetails.source}</h1>
        <h1 className={styles['question-title']}>{questionDetails.title}</h1>
        <div className={styles['tag-names']}>
          <div className={styles['tag-card']}>array</div>
          <div className={styles['tag-card']}>string</div>
          <div className={styles['tag-card']}>tree</div>
        </div>
      </div>
      <div className={styles['right-section']}>
        <div className={styles['buttons']}>
          <button
            className={styles['solve-button']}
            onClick={solveButtonHandler}
          >
            Solve
          </button>
          <button className={styles['add-button']}>+</button>
        </div>
        <div className={styles['extra-details']}>
          <p>{questionDetails.difficulty}</p>
          <p>20 +</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCards;
