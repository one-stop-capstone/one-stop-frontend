import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

import styles from './TagSection.module.css';

const GET_QUESTION_TAGS = gql`
  query MyQuery($questionId: uuid) {
    tags(where: { question_id: { _eq: $questionId } }) {
      id
      tag_name
    }
  }
`;

const TagSection = ({ questionId }) => {
  const { loading, error, data } = useQuery(GET_QUESTION_TAGS, {
    variables: { questionId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div className={styles['tag-names']}>
      {data['tags'].map((tag) => {
        return (
          <div key={tag.id} className={styles['tag-card']}>
            {tag.tag_name}
          </div>
        );
      })}
    </div>
  );
};

export default TagSection;
