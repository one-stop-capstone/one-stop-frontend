import React from "react";
import styles from "./CompanyCard.module.css";
import GfgLogo from "../../../assets/images/gfglogo.png";

const CompanyCard = () => {
  return (
    <div className={styles["card"]}>
      <img src={GfgLogo} alt="GFG" />
      <div className={styles["card__title"]}>Geeks for Geeks</div>
      <button className={styles["card__button"]}>LinkAccounts</button>
    </div>
  );
};

export default CompanyCard;
