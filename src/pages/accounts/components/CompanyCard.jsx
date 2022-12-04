import React from "react";
import styles from "./CompanyCard.module.css";

const CompanyCard = (props) => {
  return (
    <div className={styles["card"]}>
      <img src={props.image} alt="GFG" />
      <div className={styles["card__title"]}>{props.name}</div>
      <button className={styles["card__button"]}>Link Accounts</button>
    </div>
  );
};

export default CompanyCard;
