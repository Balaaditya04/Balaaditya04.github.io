// import express from 'express';
// import jwt from "jsonwebtoken";

// const app = express();
// const PORT = 8080;
// const JWT_SECRET = "Naaku_maatramey_telsu";  

// app.listen(PORT, () => {
//     console.log(`Server Started on port ${PORT}`);
// });

// const users = [
//     {
//         email: "john@gmail.com",
//         pass: "1234",
//         role: "user",
//     },
//     {
//         email: "admin@gmail.com",
//         pass: "admin123",
//         role: "admin",
//     }
// ];

// app.use(express.json());

// const authenticate = (req, res, next) => {
//     const token = req.headers['authorization'];

// }

// app.post("/login", (req, res) => {
//     const { email, pass } = req.body;
//     const found = users.find((user) => user.email === email && user.pass === pass);

//     if (found) {
//         const payload = { email: found.email, role: found.role };
//         const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

//         res.status(200).json({
//             user: found,
//             token: token
//         });
//     } else {
//         res.status(403).json({ message: "Invalid credentials" });
//     }
// });

// app.get("/users", (req, res) => {
//     res.json(users)

// })

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTE2MDcxODUsImV4cCI6MTc1MTYxMDc4NX0.xMy-PBSQLTFHk1QHaZuHFO5rDXtW5KotfHFvZ8q2Vo4






















import express from "express";
import jwt from "jsonwebtoken";

const SECRET = "secret";
const app = express();
app.use(express.json());

app.listen(8080, () => {
  console.log("Server started");
});

const users = [
  { email: "john@gmail.com", pass: "1234", role: "user" },
  { email: "cathy@gmail.com", pass: "1234", role: "admin" },
];

// Middleware to authenticate token
const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Token Missing" });

    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

// Middleware to authorize based on role
const authorize = (allowedRole) => {
  return (req, res, next) => {
    if (req.role === allowedRole) {
      next();
    } else {
      return res.status(403).json({ message: "Access Forbidden" });
    }
  };
};

// Login Route
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find((user) => user.email === email && user.pass === pass);

  if (found) {
    const payload = { email: found.email, role: found.role };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    res.status(200).json({ user: found, token });
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
});

// Protected Route - Only Admin can access
app.get("/users", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});
