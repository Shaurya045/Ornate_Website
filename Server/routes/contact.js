import express from "express";
import { sendContactEmail } from "../controllers/contactControllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("contact");
});

// Route for sending contact form email
router.post("/", sendContactEmail);

export default router;
