import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

import styles from "./HomeContent.module.css";
import QuestionCards from "./QuestionCards";
import FilterSection from "./FilterSection";

const GET_ALL_QUESTIONS = gql`
  query MyQuery($tags: [String!]!, $sources: [String!]!) {
    questions(
      where: { tags: { tag_name: { _in: $tags } }, source: { _in: $sources } }
    ) {
      difficulty
      id
      question_url
      source
      title
      tags {
        tag_name
        id
      }
    }
  }
`;

const HomeContent = () => {
  const initialTagsArray = [
    "array",
    "hashed map",
    "sorting",
    "stack",
    "linked list",
    "graph",
    "tree",
  ];

  const initialSourcesArray = [
    "Leetcode",
    "GeeksForGeeks",
    "CodingNinjas",
    "CodeChef",
  ];

  const [tagsArray, setTagsArray] = useState(initialTagsArray);
  const [sourcesArray, setSourcesArray] = useState(initialSourcesArray);

  const tagsInitialState = [
    {
      title: "array",
      isChecked: false,
    },
    {
      title: "hashed map",
      isChecked: false,
    },
    {
      title: "sorting",
      isChecked: false,
    },
    {
      title: "stack",
      isChecked: false,
    },
    {
      title: "linked list",
      isChecked: false,
    },
    {
      title: "graph",
      isChecked: false,
    },
    {
      title: "tree",
      isChecked: false,
    },
  ];

  const [tagState, setTagState] = useState(tagsInitialState);

  const sourcesInitialState = [
    {
      title: "Leetcode",
      isChecked: false,
    },
    {
      title: "GeeksForGeeks",
      isChecked: false,
    },
    {
      title: "CodingNinjas",
      isChecked: false,
    },
    {
      title: "CodeChef",
      isChecked: false,
    },
  ];

  const [sourceState, setSourceState] = useState(sourcesInitialState);

  const filterTagsHandler = (tag) => {
    setTagState((current) =>
      current.map((obj) => {
        if (obj.title === tag.title) {
          return { ...obj, isChecked: !obj.isChecked };
        }
        return obj;
      })
    );
  };

  useEffect(() => {
    let tagItems = tagState.filter((tag) => tag.isChecked);
    let tagTitles = tagItems.map((tag) => tag.title);

    if (tagTitles.length === 0) {
      tagTitles = [
        "array",
        "hashed map",
        "sorting",
        "stack",
        "linked list",
        "graph",
        "tree",
      ];
    }

    setTagsArray(tagTitles);
  }, [tagState]);

  const filterSourcesHandler = (source) => {
    setSourceState((current) =>
      current.map((obj) => {
        if (obj.title === source.title) {
          return { ...obj, isChecked: !obj.isChecked };
        }
        return obj;
      })
    );
  };

  useEffect(() => {
    let sourceItems = sourceState.filter((source) => source.isChecked);
    let sourceTitles = sourceItems.map((source) => source.title);

    if (sourceTitles.length === 0) {
      sourceTitles = ["Leetcode", "GeeksForGeeks", "CodingNinjas", "CodeChef"];
    }

    setSourcesArray(sourceTitles);
  }, [sourceState]);

  const { loading, error, data } = useQuery(GET_ALL_QUESTIONS, {
    variables: {
      tags: tagsArray,
      sources: sourcesArray,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <>
      <div className={styles["home-content"]}>
        <div className={styles["home-content__question-cards"]}>
          {data["questions"].map((question) => {
            return (
              <QuestionCards key={question.id} questionDetails={question} />
            );
          })}
        </div>
        <div className={styles["home-content__filter-section"]}>
          <FilterSection
            filterTagsHandler={filterTagsHandler}
            filterSourcesHandler={filterSourcesHandler}
            tagState={tagState}
            sourceState={sourceState}
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
