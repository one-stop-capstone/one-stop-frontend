import React, { useEffect, useState } from 'react';

import styles from './FilterSection.module.css';

const FilterSection = ({ updateTagsArray }) => {
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

  useEffect(() => {
    updateTagsArray(tags);
  }, [tags]);

  useEffect(() => {
    let tagItems = tagState.filter((tag) => tag.isChecked);
    let tagTitles = tagItems.map((tag) => tag.title);

    if (tagTitles.length === 0) {
      tagTitles = [
        'array',
        'hashed map',
        'sorting',
        'stack',
        'linked list',
        'graph',
        'tree',
      ];
    }

    setTags(tagTitles);
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
