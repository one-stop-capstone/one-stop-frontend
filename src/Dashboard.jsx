import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Accounts from "./pages/accounts/Accounts";
import Settings from "./pages/settings/Settings";
import Contests from "./pages/contests/Contests";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);

  return (
    <div className={styles["dashboard"]}>
      <Header />
      <div className={styles["dashboard__main"]}>
        <Sidebar />
        <div className={styles["dashboard__content"]}>
          <div className={styles["dashboard__content__inner"]}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/link-accounts" element={<Accounts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/contests" element={<Contests />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
