import React from 'react';

import styles from './Dashboard.module.css';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import DashboardContent from './components/DashboardContent';

const Dasboard = () => {
  return (
    <div className={styles['dashboard']}>
      <Header></Header>
      <Sidebar></Sidebar>
      <DashboardContent></DashboardContent>
    </div>
  );
};

export default Dasboard;
