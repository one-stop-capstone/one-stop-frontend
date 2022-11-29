import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import AuthProvider from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./Dashboard.jsx";
import styles from "./App.module.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./modules/graphql/ApolloClient";
import { ConfigProvider } from "antd";

function App() {
  const [client] = useState(createApolloClient());
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <ApolloProvider client={client}>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: "#808080",
            colorPrimary: "#ffffff",
            colorBorder: "#0958d9",
          },
        }}
      >
        <Router>
          <div className={styles["app"]}>
            <Routes>
              <Route
                path="auth/*"
                element={currentUser ? <Navigate to="/app" /> : <AuthPage />}
              />
              <Route
                path="app/*"
                element={currentUser ? <Dashboard /> : <Navigate to="/auth" />}
              />
              <Route path="*" element={<Navigate to="/app" />} />
            </Routes>
          </div>
        </Router>
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
