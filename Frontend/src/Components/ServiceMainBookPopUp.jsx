import PropTypes from "prop-types";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function ServiceMainBookPopUp({
  setPopUp,
  itemName,
  itemPrice,
  itemDescription,
  itemCategory,
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const calculateDiscountedPrice = (price, discount) => {
    const numericPrice = parseInt(price.replace(/,/g, ""));
    const discountedPrice = Math.floor(numericPrice * (1 - discount));
    return discountedPrice.toLocaleString("en-IN");
  };

  // Get today's date in the format YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
    const day = String(today.getDate() + 1).padStart(2, "0"); // To disable today as well
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleBooking = (e) => {
    if (!name || !selectedDate) {
      e.preventDefault(); // Prevent redirection
      setErrorMessage("Please fill in both your name and select a date.");
      return;
    }
    setErrorMessage(""); // Clear error if inputs are valid
  };

  return (
    <div className="bg-white rounded-[10px] w-[600px] max-[800px]:w-[500px] max-[560px]:w-[460px] max-[520px]:w-[400px] max-[450px]:w-[380px] max-[438px]:w-[360px] max-[420px]:w-[340px] max-[400px]:w-[320px] max-[380px]:w-[300px] h-[450px] max-[801px]:h-[470px] max-[400px]:h-[485px] fixed top-[50px] left-[400px] max-[1025px]:left-[100px] max-[680px]:left-[70px] max-[600px]:left-[30px] z-50 ">
      <div className="flex flex-col gap-[30px] relative mx-[40px] max-[500px]:mx-[20px]">
        <div className="absolute right-[-10px] top-[20px] max-[500px]:top-[10px] ">
          <IoClose
            onClick={() => setPopUp(false)}
            className="w-[25px] h-[25px] cursor-pointer"
          />
        </div>
        <div className="flex flex-row justify-center mt-[30px] ">
          <h1 className="text-center text-[35px] max-[600px]:text-[30px] font-bold font-['playfair+Display'] ">
            Book Your Day
          </h1>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[20px] ">
            <h3 className="min-w-[25%] max-w-[25%] text-[18px] max-[600px]:text-[16px] font-semibold ">
              Name:
            </h3>
            <input
              className="w-full text-[15px]  block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
              type="text"
              placeholder=""
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-[20px] ">
            <h3 className="min-w-[25%] max-w-[25%] text-[18px] max-[600px]:text-[16px] font-semibold ">
              Select Date:
            </h3>
            <input
              className="outline-none rounded-[5px] w-full "
              type="date"
              value={selectedDate}
              required
              onChange={handleChange}
              min={getTodayDate()}
            />
          </div>
          <div className="flex flex-row gap-[20px]">
            <h3 className="min-w-[25%] max-w-[25%] text-[18px] max-[600px]:text-[16px] font-semibold ">
              Makeup Type:
            </h3>
            <h3 className="text-[16px] max-[600px]:text-[15px] font-medium">
              {itemName}
            </h3>
          </div>
          <div className="flex flex-row gap-[20px]">
            <h3 className="min-w-[25%] max-w-[25%] text-[18px] max-[600px]:text-[16px] font-semibold ">
              Price:
            </h3>
            {/* {itemDescription === "HD Airbrush" &&
            itemCategory.includes("Bridal") ? (
              <>
                <span className="font-['Raleway'] font-medium line-through">
                  Rs. {itemPrice}
                </span>
                <span className="font-['Raleway'] font-medium text-md ml-1 text-[#D4AF37]">
                  Rs. {calculateDiscountedPrice(itemPrice, 0.25)}
                </span>
                <span className="ml-1 text-md font-semibold text-[#D4AF37]">
                  (25% off)
                </span>
              </>
            ) : ( */}
            <span className="font-['Raleway'] font-medium ">
              Rs. {itemPrice}
            </span>
            {/* )} */}
          </div>
        </div>
        <a
          href={`https://wa.me/919934059935?text=Hello Ornate, I ${name} want to book a ${itemName} on ${selectedDate}. `}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBooking} // Add handleBooking here
        >
          <button className="w-[150px] h-[40px] bg-[#D4AF37] text-white font-semibold rounded-[10px]">
            Book
          </button>
        </a>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-[20px] mx-[40px] max-[500px]:mx-[20px] ">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

ServiceMainBookPopUp.propTypes = {
  setPopUp: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,
  itemCategory: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate itemCategory as an array of strings
};

export default ServiceMainBookPopUp;
