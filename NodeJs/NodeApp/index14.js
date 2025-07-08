// import express from "express";
// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Connect MongoDB
// mongoose.connect("mongodb://localhost:27017/lpu")
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.log(err));

// // User Schema & Model
// const userSchema = mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//     role: String
// });

// const userModel = mongoose.model("User", userSchema);

// // Routes

// // Get all users
// app.get("/users", async (req, res) => {
//     try {
//         const result = await userModel.find();
//         res.status(200).json(result);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// });

// app.get("/users", authenticate, authorize("admin"), async (req, res) => {
//     try {
//       const result = await userModel.find();
//       res.status(200).json(result);
//     } catch (err) {
//       console.log(err);
//       res.status(400).json({ message: "Something went wrong" });
//     }
//   });

// // Register route with hashed password
// app.post("/register", async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = {
//             name,
//             email,
//             password: hashedPassword,
//             role
//         };

//         const result = await userModel.create(user);
//         res.status(201).json(result);

//     } catch (err) {
//         console.log(err);
//         res.status(400).json({ message: "Something went wrong" });
//     }
// });

// // Login route with JWT token
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await userModel.findOne({ email });
//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.json({ token });

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// });

// // Start Server
// app.listen(8080, () => {
//     console.log("Server started on http://localhost:8080");
// });






import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET = "sometext";
const app = express();

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

//models > userModel
const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
const userRouter = express.Router();
const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    console.log(err);
    return res.json({ message: "Invalid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (role === req.role) {
      next();
    } else {
      return res.json({ message: "Unauthorized access" });//
    }
  };
};
app.use(express.json());
userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashedpwd,
      role,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

userRouter.get("/users", authenticate, authorize("admin"), async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const userObj = {
          name: user.name,
          email: user.email,
          role: user.role,
        };
        const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
        res.status(200).json({ userObj, token });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});


app.use("/api", userRouter);
