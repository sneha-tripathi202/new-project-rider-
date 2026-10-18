import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
dotenv.config(); 

const app = express();
connectDB();
app.use(cors({
  origin: process.env.CORS_ORIGIN, // e.g. http://localhost:3000
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Hello Sneha, Express with ES Modules 🚀");
});

const PORT =process.env.PORT||5000
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
