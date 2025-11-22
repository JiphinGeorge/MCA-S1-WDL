import React from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Welcome to the Wheel Of Life</h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Track and balance different areas of your life.
      </p>

      {!isLoggedIn() ? (
        <div style={{ marginTop: "30px" }}>
          <Link
            to="/login"
            style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              padding: "10px 20px",
              background: "gray",
              color: "white",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </div>
      ) : (
        <Link
          to="/dashboard"
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            textDecoration: "none",
            marginTop: "20px",
            display: "inline-block",
          }}
        >
          Go to Dashboard
        </Link>
      )}
    </div>
  );
}
