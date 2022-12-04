import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getMyCodesheets } from "../../../queries";
import { useAuth } from "../../../context/AuthContext";
import CodeSheetCard from "./CodeSheetCard";

const MyCodeSheets = (props) => {
  const { currentUserId } = useAuth();
  const { loading, error, data, refetch } = useQuery(getMyCodesheets, {
    variables: {
      uid: currentUserId,
    },
  });
  useEffect(() => {
    refetch({ uid: currentUserId });
  }, [props.data, currentUserId, refetch, props.tab]);

  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  return data.codesheets.map((codesheet) => (
    <CodeSheetCard data={codesheet} type="my" />
  ));
};

export default MyCodeSheets;
