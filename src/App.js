import React from 'react';

import styles from './App.module.css';

import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className={styles['app']}>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
