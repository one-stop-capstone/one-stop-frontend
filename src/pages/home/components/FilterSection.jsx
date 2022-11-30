import React, { useEffect, useState } from 'react';
// import { gql } from '@apollo/client';
// import { useQuery } from '@apollo/client';

import styles from './FilterSection.module.css';

// const GET_ALL_TAGS = gql`
//   query MyQuery {
//     tags(distinct_on: tag_name) {
//       tag_name
//     }
//   }
// `;

const FilterSection = () => {
  // const { loading, error, data } = useQuery(GET_ALL_TAGS);

  const tagsInitialState = [
    {
      title: 'array',
      isChecked: false,
    },
    {
      title: 'hashed map',
      isChecked: false,
    },
    {
      title: 'sorting',
      isChecked: false,
    },
    {
      title: 'stack',
      isChecked: false,
    },
    {
      title: 'linked list',
      isChecked: false,
    },
    {
      title: 'graph',
      isChecked: false,
    },
    {
      title: 'tree',
      isChecked: false,
    },
  ];

  const [tags, setTags] = useState([]);
  const [tagState, setTagState] = useState(tagsInitialState);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const tagItems = tagState.filter((tag) => tag.isChecked);
    const tagTitles = tagItems.map((tag) => tag.title);

    setTags(tagTitles);
    console.log(tagTitles);
  }, [tagState]);

  const handleOnChange = (tag) => {
    setTagState((current) =>
      current.map((obj) => {
        if (obj.title === tag.title) {
          return { ...obj, isChecked: !obj.isChecked };
        }
        return obj;
      })
    );
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   console.error(error);
  //   return <div>Error!</div>;
  // }

  return (
    <div className={styles['filter-section']}>
      Filter by Question Tag:
      {tagState.map((tag) => {
        return (
          <div className={styles['filter-section__tag']} key={tag.title}>
            <div className={styles['filter-section__checkbox']}>
              <input
                type="checkbox"
                id={tag.title}
                name="tag"
                value={tag.title}
                checked={tag.isChecked}
                onChange={() => handleOnChange(tag)}
              />
              <label htmlFor={tag.title}></label>
            </div>
            <div className={styles['filter-section__label']}>{tag.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterSection;
