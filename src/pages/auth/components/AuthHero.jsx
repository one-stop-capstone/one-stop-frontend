import React from "react";
import styles from "./AuthHero.module.css";
import authHeroImage from "../../../assets/images/auth-hero__image.png";

const AuthHero = () => {
  return (
    <div className={styles["auth-hero"]}>
      <div className={styles["auth-hero__container"]}>
        <div className={styles["auth-hero__title"]}>OneStop</div>
        <div className={styles["auth-hero__tagline"]}>
          Ace your interview practice
        </div>
        <img src={authHeroImage} alt="" />
      </div>
    </div>
  );
};

export default AuthHero;
