import React from "react";

import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaRegSun,
  FaPaperclip,
  FaTrophy,
  FaList,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className={styles["sidebar"]}>
        <div className={styles["sidebar-icons__top"]}>
          <NavLink to="/app/home">
            <FaHome className={styles["sidebar-icons"]} size="2.5rem" />
          </NavLink>
          <NavLink to="/app/code-sheet">
            <FaList className={styles["sidebar-icons"]} size="2.5rem" />
          </NavLink>
          <NavLink to="/app/linked-accounts">
            <FaPaperclip className={styles["sidebar-icons"]} size="2.5rem" />
          </NavLink>
          <NavLink to="/app/contests">
            <FaTrophy className={styles["sidebar-icons"]} size="2.5rem" />
          </NavLink>
        </div>
        <div className={styles["sidebar-icons__bottom"]}>
          <NavLink to="/app/settings">
            <FaRegSun className={styles["sidebar-icons"]} size="2.5rem" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
