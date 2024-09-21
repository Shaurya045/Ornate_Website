import express from "express";
import { getAllReviews, addReview } from "../controllers/reviewController.js";

const router = express.Router();

// Route to get all reviews
router.get("/", getAllReviews);

// Route to add a new review
router.post("/", addReview);

// Route to delete a review by index
// router.delete("/:index", deleteReview);

export default router;
