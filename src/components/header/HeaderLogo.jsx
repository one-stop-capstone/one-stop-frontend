import React from 'react';

import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <div className={styles['header-logo']}>
      <button className={styles['header-logo__button']}>OS</button>
      <p className={styles['header-logo__title']}>OneStop</p>
    </div>
  );
};

export default HeaderLogo;
