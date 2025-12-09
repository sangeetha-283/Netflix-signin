export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {
    return res.status(200).json({
      token: "1234567890",
      user: { email },
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
}
