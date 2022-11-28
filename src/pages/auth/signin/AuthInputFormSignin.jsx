import React, { useState, useEffect } from "react";
import InputWithLabel from "../../../components/ui/InputWithLabel";
import styles from "./AuthInputFormSignin.module.css";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const AuthInputFormSignin = () => {
  const [loading, setLoading] = useState(false);
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signInFormSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError(false);
    setLoading(true);
    signin(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          setErrorMessage("Wrong Password!");
        } else if (err.message === "Firebase: Error (auth/user-not-found).") {
          setErrorMessage("No Account linked with this Email!");
        } else {
          setErrorMessage("Try Again!");
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div className={styles["auth-input-form"]}>
        <form onSubmit={signInFormSubmitHandler}>
          <InputWithLabel
            width="full"
            name="Email"
            type="text"
            id="email"
            placeholder="Input your email"
            required={true}
          />
          <InputWithLabel
            width="full"
            name="Password"
            type="password"
            id="password"
            placeholder="Input your password"
            required={true}
          />
          {error && (
            <div className={styles["auth-input-form__error"]}>
              {errorMessage}
            </div>
          )}

          <div className={styles["auth-input-form__bottom"]}>
            <Button text="Sign In" type="submit" disabled={loading} />
            <div className={styles["auth-input-form__signup-button"]}>
              <Link to="/auth/signup">Sign up now</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthInputFormSignin;
