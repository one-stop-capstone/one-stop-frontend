import React from "react";
import AuthInputFormOtherDetails from "./AuthInputFormOtherDetails";
import styles from "./OtherDetailsPage.module.css";
import AuthHero from "../components/AuthHero";

const OtherDetailsPage = () => {
  return (
    <div className={styles["other-details-page"]}>
      <AuthHero />
      <div className={styles["auth-component"]}>
        <div className={styles["auth-component__container"]}>
          <div className={styles["auth-component__heading"]}>
            Complete the Signup Process
          </div>
          <div className={styles["divider__line"]}></div>
          <AuthInputFormOtherDetails />
        </div>
      </div>
    </div>
  );
};

export default OtherDetailsPage;
