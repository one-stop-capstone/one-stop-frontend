import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import styles from './App.module.css';
import Dashboard from './Dashboard';
import Auth from './pages/auth/Auth';
import createApolloClient from './modules/graphql/ApolloClient';

function App() {
  const [client] = useState(createApolloClient());

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className={styles['app']}>
          <Routes>
            <Route path="auth/*" element={<Auth />} />
            <Route path="app/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/app" />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
