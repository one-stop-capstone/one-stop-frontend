import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={styles["ui-button"]}>
      <button
        onSubmit={props.onSubmit}
        type="submit"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
