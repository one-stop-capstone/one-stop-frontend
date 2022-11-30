import React from "react";
import CodeSheetCard from "./components/CodeSheetCard";
import styles from "./CodeSheetPage.module.css";
import CodeSheetTabBar from "./components/CodeSheetTabBar";

const CodeSheetPage = () => {
  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["title"]}>Code Sheets</div>
        {/* <CodeSheetCard /> */}
        <CodeSheetTabBar />
      </div>
    </>
  );
};

export default CodeSheetPage;
