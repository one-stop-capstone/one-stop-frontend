import React from 'react';
import { FaRegBell } from 'react-icons/fa';

import styles from './HeaderProfile.module.css';

const HeaderProfile = () => {
  return (
    <div className={styles['header-profile']}>
      <FaRegBell
        color="#9A9AB0"
        size="1.5rem"
        className={styles['header-profile__notif']}
      />
      <div className={styles['header-profile__img']}></div>
      <div className={styles['header-profile__details']}>
        <p className={styles['header-profile__details__name']}>Glen Dsouza</p>
        <p className={styles['header-profile__details__email']}>
          glen.d@email.com
        </p>
      </div>
    </div>
  );
};

export default HeaderProfile;
