import React from "react";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = (props) => {
  return (
    <div
      className={`${styles["input-with-label"]} ${
        props.width === "half" ? styles["half"] : styles["full"]
      }`}
    >
      <label htmlFor={props.id}>{props.name}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        ref={props.ref}
        disabled={props.disabled}
      />
    </div>
  );
};

export default InputWithLabel;
