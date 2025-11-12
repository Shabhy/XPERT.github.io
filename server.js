// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock user data
const users = [
  { email: "arkja@example.com", password: "12345", name: "Arkja", role: "expert" },
  { email: "user@example.com", password: "12345", name: "User", role: "user" }
];

// Simple login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
