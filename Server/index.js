import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import reviewRoutes from "./routes/review.js";
import { config } from "dotenv";
config();
// console.log("User:", process.env.AUTHUSER);
// console.log("Password:", process.env.AUTHPASS);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Backend is up and running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
