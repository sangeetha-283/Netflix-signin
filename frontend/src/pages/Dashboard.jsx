import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111", color: "#fff", padding: 40 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Welcome{user ? `, ${user.name}` : ""}!</h2>
        <button onClick={logout} style={{ marginLeft: "auto", background: "#e50914", border: "none", color: "#fff", padding: "8px 12px", borderRadius: 4 }}>
          Logout
        </button>
      </div>
      <p style={{ marginTop: 20 }}>This is a dummy Dashboard.</p>
    </div>
  );
}
