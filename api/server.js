const express = require("express");
const app = express();
const cors = require("cors");

// Enable JSON
app.use(express.json());
app.use(cors());

// Your mock user data
const MOCK_USER = {
  email: "user@example.com",
  password: "Password123",
  name: "Demo User"
};

// LOGIN route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return res.json({
      message: "Login successful",
      token: "mock-token-123",
      user: { name: MOCK_USER.name, email: MOCK_USER.email }
    });
  }

  return res.status(401).json({ message: "Invalid email or password" });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ❗IMPORTANT: Export as handler for Vercel
module.exports = app;
