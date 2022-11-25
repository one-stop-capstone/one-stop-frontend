import React from "react";

import styles from "./App.module.css";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <Router>
      <div className={styles["app"]}>
        <Routes>
          <Route path="auth/*" element={<Auth />} />
          <Route path="app/*" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
