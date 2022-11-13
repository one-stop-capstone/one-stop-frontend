import React from 'react';

import styles from './Header.module.css';

import HeaderLogo from './HeaderLogo';
import HeaderProfile from './HeaderProfile';

const Header = () => {
  return (
    <div className={styles['header']}>
      <HeaderLogo></HeaderLogo>
      <HeaderProfile></HeaderProfile>
    </div>
  );
};

export default Header;
