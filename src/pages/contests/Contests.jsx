import React from "react";
import styles from "./Contests.module.css";
import backImg from "./img/back-coding.jpg";

const Contests = () => {
  return (
    <div className={styles["settings_container"]}>
      <div className={styles["settings_card"]}>
        <div className={styles["card__text_header"]}>Current Contests</div>
        <img src={backImg} alt="Background" />;
      </div>
      <div className={styles["settings_card"]}>
        <div className={styles["card__text_header"]}>Upcoming Contests</div>
      </div>
      <div className={styles["settings_card"]}>
        <div className={styles["card__text_header"]}>Past Contests</div>
      </div>
    </div>
  );
};

export default Contests;
