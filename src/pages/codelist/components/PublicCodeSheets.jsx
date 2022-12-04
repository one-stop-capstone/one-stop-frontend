import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getPublcCodesheets } from "../../../queries";
import { useAuth } from "../../../context/AuthContext";
import CodeSheetCard from "./CodeSheetCard";
import { Spin } from "antd";

const PublicCodeSheets = (props) => {
  const { currentUserId } = useAuth();
  const { loading, error, data, refetch } = useQuery(getPublcCodesheets, {
    variables: {
      uid: currentUserId,
    },
  });
  useEffect(() => {
    refetch({ uid: currentUserId });
  }, [props.data, currentUserId, refetch, props.tab]);
  if (loading)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  if (error) return <p>Try Again...</p>;

  return data.codesheets.map((codesheet) => (
    <CodeSheetCard data={codesheet} type="public" />
  ));
};

export default PublicCodeSheets;
