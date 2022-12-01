import React from 'react';

import styles from './FilterSection.module.css';

const FilterSection = ({
  filterTagsHandler,
  filterSourcesHandler,
  tagState,
  sourceState,
}) => {
  return (
    <div className={styles['filter-section']}>
      <div className={styles['filter-section__toggles']}>
        Filter by Tag:
        {tagState.map((tag) => {
          return (
            <div className={styles['filter-section__toggle']} key={tag.title}>
              <div className={styles['filter-section__checkbox']}>
                <input
                  type="checkbox"
                  id={tag.title}
                  name="tag"
                  value={tag.title}
                  checked={tag.isChecked}
                  onChange={() => filterTagsHandler(tag)}
                />
                <label htmlFor={tag.title}></label>
              </div>
              <div className={styles['filter-section__label']}>{tag.title}</div>
            </div>
          );
        })}
      </div>
      <div className={styles['filter-section__toggles']}>
        Filter by Platform:
        {sourceState.map((source) => {
          return (
            <div
              className={styles['filter-section__toggle']}
              key={source.title}
            >
              <div className={styles['filter-section__checkbox']}>
                <input
                  type="checkbox"
                  id={source.title}
                  name="source"
                  value={source.title}
                  checked={source.isChecked}
                  onChange={() => filterSourcesHandler(source)}
                />
                <label htmlFor={source.title}></label>
              </div>
              <div className={styles['filter-section__label']}>
                {source.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
