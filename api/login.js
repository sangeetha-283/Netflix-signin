export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  const MOCK_USER = {
    email: "user@example.com",
    password: "Password123",
    name: "Demo User"
  };

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return res.status(200).json({
      message: "Login successful",
      token: "mock-token-12345",
      user: { name: MOCK_USER.name, email: MOCK_USER.email }
    });
  }

  return res.status(401).json({ message: "Invalid email or password" });
}
