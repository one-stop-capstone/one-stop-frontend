import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

import QuestionCards from "./QuestionCards";

const GET_ALL_QUESTIONS = gql`
  query MyQuery {
    questions {
      difficulty
      id
      question_url
      source
      title
    }
  }
`;

const HomeContent = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUESTIONS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div>
      {data["questions"].map((question) => {
        return <QuestionCards key={question.id} questionDetails={question} />;
      })}
    </div>
  );
};

export default HomeContent;
