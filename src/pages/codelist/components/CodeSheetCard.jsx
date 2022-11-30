import * as React from "react";
import styles from "./CodeSheetCard.module.css";
import HeartButton from "./HeartButton";
import avatar from "../../../assets/images/download (1).png";

const CodeSheetCard = () => {
  return (
    <div className={styles["codesheetcard__line"]}>
      <div className={styles["codesheetcard_contaner"]}>
        <div className={styles["codesheetcard__avataar"]}>
          <img src={avatar} alt="A" />
        </div>

        <div className={styles["codesheetcard__details"]}>
          <div className={styles["codesheetcard__details__title"]}>
            CodeSheet
          </div>
          <div className={styles["codesheetcard__details__creator"]}>
            <span>By -</span>
            <p>ABCD</p>
          </div>
        </div>
      </div>

      <div className={styles["codesheetcard__questionsno"]}>
        <p>52 Questions</p>
      </div>
      <div className={styles["codesheetcard__likebutton"]}>
        <p style={{ marginRight: "0.5rem" }}>31 likes</p>
        <HeartButton />
      </div>
    </div>
  );
};

export default CodeSheetCard;
