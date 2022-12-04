import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getCodeSheetQuestions } from "../../../queries";
import QuestionCards from "../../home/components/QuestionCards";
import styles from "./CodeSheetQuestions.module.css";

const CodeSheetQuestions = () => {
  const { codesheetId } = useParams();

  const { loading, error, data } = useQuery(getCodeSheetQuestions, {
    variables: {
      id: codesheetId,
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return console.log(error);

  //   console.log(data.codesheets_by_pk.codesheet_questions[0]);

  return (
    <>
      <div className={styles["title"]}>{data.codesheets_by_pk.title}</div>
      {data.codesheets_by_pk.codesheet_questions.map((question) => {
        return (
          <QuestionCards
            key={question.id}
            questionDetails={question.question}
          />
        );
      })}
    </>
  );
};

export default CodeSheetQuestions;
