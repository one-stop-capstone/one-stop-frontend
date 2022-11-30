import React from "react";

import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaChartBar,
  FaRegSun,
  FaPaperclip,
  FaTrophy,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-icons__top"]}>
        <Link to="/app/home">
          <FaHome className={styles["sidebar-icons"]} size="2.5rem" />
        </Link>
        <FaChartBar
          className={styles["sidebar-icons"]}
          size="2.5rem"
        ></FaChartBar>
        <Link to="/app/link-accounts">
          <FaPaperclip className={styles["sidebar-icons"]} size="2.5rem" />
        </Link>
        <Link to="/app/contests">
        <FaTrophy className={styles["sidebar-icons"]} size="2.5rem" />
        </Link>
      </div>
      <div className={styles["sidebar-icons__bottom"]}>
        <Link to="/app/settings">
        <FaRegSun className={styles["sidebar-icons"]} size="2.5rem" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
