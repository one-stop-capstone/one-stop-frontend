import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./Dashboard.module.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Accounts from "./pages/accounts/Accounts";
import { getUserID } from "./queries";
import { useAuth } from "./context/AuthContext";
import { useQuery } from "@apollo/client";
import CodeSheetPage from "./pages/codelist/CodeSheetPage";
import Settings from "./pages/settings/Settings";
import Contests from "./pages/contests/Contests";

const Dashboard = () => {
  const { currentUser, fetchUserId } = useAuth();
  const { data, loading } = useQuery(getUserID, {
    variables: {
      uid: currentUser.uid,
    },
  });

  useEffect(() => {
    fetchUserId(data?.users[0].id);
  }, [data, loading, fetchUserId]);

  return (
    <div className={styles["dashboard"]}>
      <Header />
      <div className={styles["dashboard__main"]}>
        <Sidebar />
        <div className={styles["dashboard__content"]}>
          <div className={styles["dashboard__content__inner"]}>
            <Routes>
              <Route path="/" element={<Navigate to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="linked-accounts" element={<Accounts />} />
              <Route path="settings" element={<Settings />} />
              <Route path="contests" element={<Contests />} />
              <Route path="*" element={<Dashboard />} />
              <Route path="code-sheet/*" element={<CodeSheetPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
