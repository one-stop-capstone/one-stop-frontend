import React from "react";
import CompanyCard from "./components/CompanyCard";
import styles from "./Accounts.module.css";
import GfgLogo from "../../assets/images/gfg-logo.png";
import CodeChefLogo from "../../assets/images/codechef-logo.png";
import LeetCodeLogo from "../../assets/images/leetcode-logo.png";
import CodingNinjasLogo from "../../assets/images/coding-ninjas-logo.png";
import CodingBlocksLogo from "../../assets/images/coding-blocks-logo.png";
import Codeforces from "../../assets/images/codeforces-logo.png";


const Accounts = () => {
  return (
    <div className={styles["accounts_container"]}>
      <div className={styles["accounts__link__new__accounts"]}>
        <CompanyCard image={GfgLogo} name="GeeksForGeeks"/>
        <CompanyCard image={CodeChefLogo} name="CodeChef"/>
        <CompanyCard image={LeetCodeLogo} name="Leetcode"/>
        <CompanyCard image={CodingNinjasLogo} name="Coding Ninjas"/>
        <CompanyCard image={CodingBlocksLogo} name="Coding Blocks"/>
        <CompanyCard image={Codeforces} name="Codeforces"/>
      </div>
    </div>
  );
};

export default Accounts;
