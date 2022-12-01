import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

import styles from './HomeContent.module.css';
import QuestionCards from './QuestionCards';
import FilterSection from './FilterSection';

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
    'array',
    'hashed map',
    'sorting',
    'stack',
    'linked list',
    'graph',
    'tree',
  ];

  const initialSourcesArray = ['Leetcode', 'GeeksForGeeks'];

  const [tagsArray, setTagsArray] = useState(initialTagsArray);
  const [sourcesArray, setSourcesArray] = useState(initialSourcesArray);

  const { loading, error, data } = useQuery(GET_ALL_QUESTIONS, {
    variables: {
      tags: tagsArray,
      sources: sourcesArray,
    },
  });

  const updateTagsArray = (tags) => {
    setTagsArray(tags);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div className={styles['home-content']}>
      <div className={styles['home-content__question-cards']}>
        {data['questions'].map((question) => {
          return <QuestionCards key={question.id} questionDetails={question} />;
        })}
      </div>
      <div className={styles['home-content__filter-section']}>
        <FilterSection updateTagsArray={updateTagsArray} />
      </div>
    </div>
  );
};

export default HomeContent;
