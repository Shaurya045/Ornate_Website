import { useState, useEffect } from "react";
import axios from "axios";

function HomeAddReview() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, message, date: new Date().toLocaleDateString() };
    addReview(newReview);
    setName("");
    setMessage("");
  };

  // Fetch all reviews when the component loads
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("https://ornate-website.onrender.com/api/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const addReview = async (newReview) => {
    try {
      const response = await axios.post(
        "https://ornate-website.onrender.com/api/reviews",
        newReview
      );
      if (response.status === 201) {
        fetchReviews(); // Re-fetch reviews to get the updated list
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="my-[60px] w-full px-[30px] max-[540px]:px-[10px] ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[60px] items-center  ">
          <h2 className="font-['Raleway'] text-[25px] max-[540px]:text-[22px] font-bold">
            Submit a Review
          </h2>
          <div className="relative w-[50%] max-[1000px]:w-[55%] max-[900px]:w-[60%] max-[800px]:w-[85%] ">
            <label className="absolute top-[-25px] left-0 text-gray-500 text-sm">
              Name
            </label>
            <input
              className="w-full text-[15px]  block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="relative w-[50%] max-[1000px]:w-[55%] max-[900px]:w-[60%] max-[800px]:w-[85%] ">
            <label className="absolute top-[-25px] left-0 text-gray-500 text-sm">
              Review
            </label>
            <textarea
              className="w-full text-[15px] block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
              rows="6"
              placeholder="Your Review"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            className="w-[200px] h-[50px] bg-[#D4AF37] rounded-[5px] text-white font-semibold  "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeAddReview;
