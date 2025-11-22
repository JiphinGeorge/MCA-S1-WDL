import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/api";
import { saveToken } from "../../utils/auth";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/login", data);
      saveToken(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input {...register("email")} type="email" placeholder="Email" required />
        <input {...register("password")} type="password" placeholder="Password" required />

        <button style={{ padding: "10px", background: "#333", color: "white", cursor: "pointer" }}>
          Login
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
