import React from "react";
import CompanyCard from "./components/CompanyCard";
import styles from "./Accounts.module.css";

const Accounts = () => {
  return (
    <div className={styles["accounts_container"]}>
      <div className={styles["accounts__link__new__accounts"]}>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
};

export default Accounts;
