import React, { useEffect, useState } from "react";
import InputWithLabel from "../../../components/ui/InputWithLabel";
import styles from "./AuthInputFormSignup.module.css";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const AuthInputFormSignup = () => {
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signUpFormSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    if (password !== confirmpassword) {
      setError(true);
      setErrorMessage("Passwords do not match ");

      return console.log("Unmatch");
    }
    setError(false);
    setLoading(true);
    signup(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMessage("User Already Present Signin Instead");
        } else {
          setErrorMessage("Try Again");
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div className={styles["auth-input-form"]}>
        <form onSubmit={signUpFormSubmitHandler}>
          <InputWithLabel
            width="full"
            name="Email"
            type="email"
            id="email"
            placeholder="Enter email"
            required={true}
          />
          <InputWithLabel
            width="full"
            name="Password"
            type="password"
            id="password"
            placeholder="Enter password"
            required={true}
          />
          <InputWithLabel
            width="full"
            name="ConfirmPassword"
            type="password"
            id="confirmpassword"
            placeholder="Confirm password"
            required={true}
          />
          {error && (
            <div className={styles["auth-input-form__error"]}>
              {errorMessage}
            </div>
          )}
          <div className={styles["auth-input-form__bottom"]}>
            <Button
              text="Create Account"
              type="submit"
              disabled={loading}
            ></Button>
            <div className={styles["auth-input-form__signin-button"]}>
              <Link to="/auth/signin">Sign in instead</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthInputFormSignup;
