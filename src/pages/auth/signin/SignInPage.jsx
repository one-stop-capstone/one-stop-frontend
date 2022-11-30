import React from "react";
import AuthHero from "../components/AuthHero";
import styles from "./SignInPage.module.css";
import googleLogo from "../../../assets/images/google-logo.png";
import githubLogo from "../../../assets/images/github-logo.png";
import AuthInputFormSignin from "./AuthInputFormSignin";
import Divider from "../../../components/ui/Divider";

const SignInPage = () => {
  return (
    <div className={styles["sign-in-page"]}>
      <AuthHero />
      <div className={styles["auth-component"]}>
        <div className={styles["auth-component__container"]}>
          <div className={styles["auth-component__heading"]}>
            Sign in to Your PaperLab Dashboard
          </div>
          <div className={styles["auth-component__subheading"]}>
            Sign in using
          </div>
          <div className={styles["auth-component__logo-container"]}>
            <img
              src={googleLogo}
              alt="google-logo"
              className={styles["auth-component__auth-logo-btn"]}
            />
            <img
              src={githubLogo}
              alt="github-logo"
              className={styles["auth-component__auth-logo-btn"]}
            />
          </div>
          <Divider text="Or" />
          <AuthInputFormSignin />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
