import React from "react";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 h-screen w-screen">
      <div className="flex items-center justify-center h-screen w-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
