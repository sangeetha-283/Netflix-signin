const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// allow requests from Vite (frontend)
app.use(cors());
app.use(express.json());

// Simple mock user (no DB)
const MOCK_USER = {
  email: "user@example.com",
  password: "Password123",
  name: "User"
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return res.json({
      message: "Login successful",
      token: "mock-token-12345",
      user: { name: MOCK_USER.name, email: MOCK_USER.email }
    });
  }
  return res.status(401).json({ message: "Invalid email or password" });
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
