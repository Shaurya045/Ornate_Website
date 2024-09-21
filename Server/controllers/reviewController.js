import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file URL and convert it to a directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reviewsFilePath = path.join(__dirname, "../data/reviews.json");

const readReviews = (callback) => {
  fs.readFile(reviewsFilePath, "utf-8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const reviews = JSON.parse(data || "[]");
      callback(null, reviews);
    }
  });
};

const writeReviews = (reviews, callback) => {
  fs.writeFile(reviewsFilePath, JSON.stringify(reviews, null, 2), (err) => {
    callback(err);
  });
};

// Get all reviews
export const getAllReviews = (req, res) => {
  //   res.send("review");
  readReviews((err, reviews) => {
    if (err) {
      res.status(500).json({ message: "Error reading reviews" });
    } else {
      res.json(reviews);
    }
  });
};

// Add a new review
export const addReview = (req, res) => {
  const newReview = req.body;
  readReviews((err, reviews) => {
    if (err) {
      res.status(500).json({ message: "Error reading reviews" });
    } else {
      reviews.push(newReview);
      writeReviews(reviews, (err) => {
        if (err) {
          res.status(500).json({ message: "Error saving review" });
        } else {
          res.status(201).json({ message: "Review added successfully" });
        }
      });
    }
  });
};

// Delete a review by index
// export const deleteReview = (req, res) => {
//   const reviewIndex = parseInt(req.params.index);
//   readReviews((err, reviews) => {
//     if (err) {
//       res.status(500).json({ message: "Error reading reviews" });
//     } else if (reviewIndex < 0 || reviewIndex >= reviews.length) {
//       res.status(400).json({ message: "Invalid review index" });
//     } else {
//       reviews.splice(reviewIndex, 1); // Remove the review
//       writeReviews(reviews, (err) => {
//         if (err) {
//           res.status(500).json({ message: "Error deleting review" });
//         } else {
//           res.json({ message: "Review deleted successfully" });
//         }
//       });
//     }
//   });
// };
