import React, { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

import styles from './HomeContent.module.css';
import QuestionCards from './QuestionCards';
import FilterSection from './FilterSection';

const GET_ALL_QUESTIONS = gql`
  query MyQuery {
    questions {
      id
      difficulty
      question_url
      source
      title
    }
  }
`;

const GET_FILTERED_QUESTION_IDS = gql`
  query MyQuery($tags: [String!]!) {
    tags(where: { tag_name: { _in: $tags } }) {
      question_id
    }
  }
`;

const HomeContent = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUESTIONS);
  const { questionIdLoading, questionIdError, questionIdData } = useQuery(
    GET_FILTERED_QUESTION_IDS,
    {
      tags: ['array', 'stack'],
    }
  );

  useEffect(() => {
    console.log(questionIdData);
  }, [questionIdData]);

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
        <FilterSection />
      </div>
    </div>
  );
};

export default HomeContent;
