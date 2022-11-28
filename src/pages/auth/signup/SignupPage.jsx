import React from "react";
import AuthHero from "../components/AuthHero";
import styles from "./SignupPage.module.css";
import googleLogo from "../../../assets/images/google-logo.png";
import githubLogo from "../../../assets/images/github-logo.png";
import AuthInputFormSignup from "./AuthInputFormSignup";
import Divider from "../../../components/ui/Divider";

const SignUpPage = () => {
  return (
    <div className={styles["sign-up-page"]}>
      <AuthHero />
      <div className={styles["auth-component"]}>
        <div className={styles["auth-component__container"]}>
          <div className={styles["auth-component__heading"]}>
            Sign up to Your OneStop Dashboard
          </div>
          <div className={styles["auth-component__subheading"]}>
            Sign up using
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
          <Divider text="Or"/>
          <AuthInputFormSignup />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
