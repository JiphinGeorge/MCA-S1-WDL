import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#151515",
        padding: "14px 20px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <h2>Wheel Of Life</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        {isLoggedIn() ? (
          <>
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
            <Link
              to="/history"
              style={{ color: "white", textDecoration: "none" }}
            >
              History
            </Link>

            <button
              onClick={handleLogout}
              style={{
                background: "red",
                padding: "6px 12px",
                border: "none",
                cursor: "pointer",
                color: "white",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
