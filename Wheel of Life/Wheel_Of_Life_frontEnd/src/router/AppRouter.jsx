import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import DashboardPage from "../pages/DashboardPage";
import HistoryPage from "../pages/HistoryPage";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Navbar from "../components/UI/Navbar";
import { isLoggedIn } from "../utils/auth";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={isLoggedIn() ? <DashboardPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/history"
          element={isLoggedIn() ? <HistoryPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
