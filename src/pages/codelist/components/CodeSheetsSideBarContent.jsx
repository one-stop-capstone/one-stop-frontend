import React from "react";
import styles from "./CodeSheetsSidebarContent.module.css";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getTopRatedCodesheets } from "../../../queries";

const CodeSheetsSideBarContent = () => {
  const { data, loading, error } = useQuery(getTopRatedCodesheets);
  //   React.useEffect(() => {
  //     console.log(data.codesheets);
  //   }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div className={styles["codesheetsidebar__container"]}>
      <div className={styles["codesheetsidebar__title"]}>
        Top Rated CodeSheets
      </div>
      <div className={styles["divider__line"]} />
      <div className={styles["codesheetsidebar__options"]}>
        {data.codesheets.map((item) => {
          return (
            <Link to={item.id} style={{ textDecoration: "none" }}>
              <div className={styles["item"]}>{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CodeSheetsSideBarContent;
