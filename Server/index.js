import express from "express";
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

app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
