import Review from "../models/review.model.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  //   res.send("review");
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

// Add a new review
export const addReview = async (req, res) => {
  try {
    const { name, message } = req.body;
    const newReview = new Review({ name, message });
    await newReview.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating review" });
  }
};
