import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OtherDetailsPage from "./otherdetails/OtherDetailsPage";
import SignInPage from "./signin/SignInPage";
import SignUpPage from "./signup/SignupPage";

const AuthPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="signin" />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/additionalDetails" element={<OtherDetailsPage />} />
    </Routes>
  );
};

export default AuthPage;
