import React from "react";
import { useParams } from "react-router-dom";

const CodeSheetQuestions = () => {
  const { codesheetId } = useParams();

  
  return <div>{codesheetId}</div>;
};

export default CodeSheetQuestions;
