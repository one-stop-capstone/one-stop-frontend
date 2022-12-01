import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./CodeSheetPage.module.css";
import CodeSheetTabBar from "./components/CodeSheetTabBar";
import CodeSheetsSideBarContent from "./components/CodeSheetsSideBarContent";
import CodeSheetQuestions from "./components/CodeSheetQuestions";

const CodeSheetPage = () => {
  return (
    <>
      <div className={styles["main-content"]}>
        <div className={styles["title"]}>Code Sheets</div>
        <Routes>
          <Route path="/" element={<CodeSheetTabBar />} />
          <Route path=":codesheetId" element={<CodeSheetQuestions />} />
        </Routes>
      </div>
      <div className={styles["codesheetsidebar"]}>
        <CodeSheetsSideBarContent />
      </div>
    </>
  );
};

export default CodeSheetPage;
