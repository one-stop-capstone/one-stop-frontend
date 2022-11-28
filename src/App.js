import React from "react";

import styles from "./App.module.css";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import AuthProvider from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";

function App() {
  const currentUser = useAuth();
  console.log(currentUser);
  return (
    <AuthProvider>
      <Router>
        <div className={styles["app"]}>
          <Routes>
            <Route path="auth/*" element={<AuthPage />} />
            <Route path="app/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/app" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
