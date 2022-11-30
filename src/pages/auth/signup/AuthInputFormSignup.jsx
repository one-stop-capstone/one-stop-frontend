import React, { useState } from "react";
import InputWithLabel from "../../../components/ui/InputWithLabel";
import styles from "./AuthInputFormSignup.module.css";
import Button from "../../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { addNewUser } from "../../../mutations";

const AuthInputFormSignup = () => {
  const [buttonLoading, setLoading] = useState(false);
  const { signup } = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [insert_users_one] = useMutation(addNewUser);
  const navigate = useNavigate();
  const signUpFormSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    const name = e.target.name.value;
    const university = e.target.currentuniversity.value;
    const passingyear = e.target.passingyear.value;
    if (password !== confirmpassword) {
      setError(true);
      setErrorMessage("Passwords do not match ");

      return console.log("Unmatch");
    }
    setError(false);
    setLoading(true);
    signup(email, password)
      .then((userData) => {
        insert_users_one({
          variables: {
            email: email,
            firebase_token: userData.user.uid,
            graduation_year: passingyear === "none" ? null : passingyear,
            name: name,
            university_name: university,
          },
        })
          .then((adata) => {
            navigate("/app");
          })
          .catch(async (err) => {
            console.log(err);
            setError(true);
            setErrorMessage(err.message);
            setLoading(false);
          });
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMessage("User Already Present Signin Instead");
        } else {
          setErrorMessage("Check your Internet Connection and try again");
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div className={styles["auth-input-form"]}>
        <form onSubmit={signUpFormSubmitHandler} id="signupform">
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
            minlength="6"
          />
          <InputWithLabel
            width="full"
            name="Confirm Password"
            type="password"
            id="confirmpassword"
            placeholder="Confirm password"
            required={true}
            minlength="6"
          />

          <div className={styles["auth-input-form__container"]}>
            <InputWithLabel
              width="half"
              name="Name"
              type="text"
              id="name"
              placeholder="Enter name"
              required={true}
            />
            <InputWithLabel
              width="half"
              name="Current University"
              type="text"
              id="currentuniversity"
              placeholder="Current university"
            />
          </div>
          <div className={styles["input-with-label"]}>
            <label htmlFor="passingyear">Year of Passing</label>

            <select id="passingyear" form="signupform" defaultValue="none">
              <option value="none" disabled hidden>
                Select Passing Year
              </option>
              {Array(10)
                .fill()
                .map((element, index) => index + 2023)
                .map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
            </select>
          </div>
          {error && (
            <div className={styles["auth-input-form__error"]}>
              {errorMessage}
            </div>
          )}
          <div className={styles["auth-input-form__bottom"]}>
            <Button
              text="Create Account"
              type="submit"
              disabled={buttonLoading}
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
