import React from 'react';

import styles from './Sidebar.module.css';

import {
  FaHome,
  FaChartBar,
  FaRegSun,
  FaPaperclip,
  FaTrophy,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar-icons__top']}>
        <FaHome className={styles['sidebar-icons']} size="2.5rem" />
        <FaChartBar className={styles['sidebar-icons']} size="2.5rem" />
        <FaPaperclip className={styles['sidebar-icons']} size="2.5rem" />
        <FaTrophy className={styles['sidebar-icons']} size="2.5rem" />
      </div>
      <div className={styles['sidebar-icons__bottom']}>
        <FaRegSun className={styles['sidebar-icons']} size="2.5rem" />
      </div>
    </div>
  );
};

export default Sidebar;
