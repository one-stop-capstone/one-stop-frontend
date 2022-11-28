import React from "react";
import InputWithLabel from "../../../components/ui/InputWithLabel";
import styles from "./AuthInputFormOtherDetails.module.css";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../context/AuthContext";

const AuthInputFormOtherDetails = () => {
  return (
    <>
      <div className={styles["auth-input-form"]}>
        <form>
          <InputWithLabel
            width="full"
            name="Name"
            type="text"
            id="name"
            placeholder="Enter your Full Name "
            // required={true}
          />
          <InputWithLabel
            width="full"
            name="Current Univeristy"
            type="text"
            id="currentuniversity"
            placeholder="Enter you Current University"
            required={true}
          />
          <InputWithLabel
            width="full"
            name="Year of Passing"
            type="number"
            id="passingyear"
            placeholder="Enter your Year of Passing"
            required={true}
          />

          <div className={styles["auth-input-form__bottom"]}>
            <Button text="Finish" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthInputFormOtherDetails;
