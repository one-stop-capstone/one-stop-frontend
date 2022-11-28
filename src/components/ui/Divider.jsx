import React from "react";
import styles from "./Divider.module.css";

const Divider = (props) => {
  return (
    <div className={styles["divider"]}>
      <div className={styles["divider__line"]}></div>
      <div className={styles["divider__text"]}>{props.text}</div>
      <div className={styles["divider__line"]}></div>
    </div>
  );
};

export default Divider;
