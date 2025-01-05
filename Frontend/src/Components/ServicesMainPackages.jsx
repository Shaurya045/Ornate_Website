import React, { useState } from "react";
import { package_list } from "../assets/asset";
import ServiceMainBookPopUp from "./ServiceMainBookPopUp";

function ServicesMainPackages() {
  const [showPackages, setShowPackages] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [cardUP, setCardUP] = useState(0);
  const [category, setCategory] = useState("");
  const calculateDiscountedPrice = (price, discount) => {
    const numericPrice = parseInt(price.replace(/,/g, ""));
    const discountedPrice = Math.floor(numericPrice * (1 - discount));
    return discountedPrice.toLocaleString("en-IN");
  };
  // Utility function to determine the font size based on the name length
  const getFontSize = (name) => {
    if (name.length > 30) {
      return "30px";
    } else if (name.length > 20) {
      return "35px";
    } else {
      return "45px";
    }
  };
  return (
    <div
      id="bookPackages"
      className={`w-full py-[80px] px-[100px] max-[451px]:px-[30px] max-[821px]:px-[50px] flex flex-row gap-[80px] max-[1025px]:flex-col `}
    >
      <div className="w-[25%] flex flex-col max-[1025px]:w-full ">
        <div className="flex flex-col gap-[5px] ">
          <div
            className="flex flex-row p-[10px] items-center justify-center cursor-pointer "
            onClick={() => {
              setShowPackages(!showPackages);
              setCategory("");
            }}
          >
            <h2 className="font-['Lora'] font-medium text-[30px] ">Packages</h2>
            <div
              className={`${
                showPackages ? "hidden" : "block"
              } border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto`}
            ></div>
            <div
              className={`${
                showPackages ? "block" : "hidden"
              } mt-[15px] border-t-[10px] border-t-[#4A4745] border-b-[12px] border-b-transparent border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent ml-auto`}
            ></div>
          </div>
          <ul
            className={`${
              showPackages ? "block" : "hidden"
            } flex flex-col gap-[5px] px-[10px] w-[90%] text-[17px]`}
          >
            <li
              onClick={() => setCategory("Party")}
              className={`font-medium cursor-pointer hover:bg-[#D4AF37] hover:rounded-[5px] hover:text-[#EFE6DD] px-[5px] ${
                category === "Party" ? "bg-[#D4AF37] text-[#EFE6DD]" : ""
              }`}
            >
              Party Makeup
            </li>
            <li
              onClick={() => setCategory("Special Occasion")}
              className={`font-medium cursor-pointer hover:bg-[#D4AF37] hover:rounded-[5px] hover:text-[#EFE6DD] px-[5px] ${
                category === "Special Occasion"
                  ? "bg-[#D4AF37] text-[#EFE6DD]"
                  : ""
              }`}
            >
              Engagment/ Reception/ Pre-Wedding Makeup
            </li>
            <li
              onClick={() => setCategory("Bridal")}
              className={`font-medium cursor-pointer hover:bg-[#D4AF37] hover:rounded-[5px] hover:text-[#EFE6DD] px-[5px] ${
                category === "Bridal" ? "bg-[#D4AF37] text-[#EFE6DD]" : ""
              }`}
            >
              Bridal
            </li>
          </ul>
          <hr className="h-[3px] bg-black " />
        </div>
        <div>
          <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">
              Specifics
            </h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
          </div>
          <hr className="h-[3px] bg-black " />
        </div>
        <div>
          <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">
              Festive Offers
            </h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
          </div>
          <hr className="h-[3px] bg-black " />
        </div>
        {/* <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">Styling</h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
        </div>
        <hr className="h-[3px] bg-black " /> */}
      </div>
      <div className="w-[75%] grid min-[724px]:grid-cols-[repeat(2,1fr)] gap-[40px] max-[1025px]:w-full ">
        {package_list
          .filter((item) => {
            if (category === "") {
              return true; // Return all items if no category is selected
            } else {
              return item.category.includes(category);
            }
          })
          .map((item, index) => (
            <div
              key={index}
              className=" h-[500px] relative col-span-1 row-span-1 rounded-[10px] overflow-hidden flex justify-center "
            >
              <div className="w-full h-full rounded-[10px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className=" absolute bottom-[-60%] left-[-18%] w-[150%] h-[600px] bg-[#8B5E3C] blur-[110px] "></div>
              <div
                className={` absolute self-end flex flex-col gap-[0px] items-center mb-[45px] px-[8px] `}
              >
                <h2
                  className="text-[#EFE6DD] font-['Playfair+Display'] font-semibold leading-[50px] text-center [text-shadow:_6px_6px_10px_rgba(0,0,0,0.5)] mb-[20px] "
                  style={{ fontSize: getFontSize(item.name) }}
                >
                  {item.name}
                </h2>
                <h3 className="text-white text-[25px] font-['Raleway'] font-semibold [text-shadow:_3px_3px_8px_rgba(0,0,0,0.5)] ">
                  {item.description}
                </h3>
                <p className="text-white text-center text-[16px] font-['Raleway'] font-light ">
                  Starting from{" "}
                  {/* {item.description === "HD Airbrush" &&
                  item.category.includes("Bridal") ? (
                    <>
                      <span className="font-['Raleway'] font-medium line-through">
                        Rs. {item.price}
                      </span>
                      <span className="font-['Raleway'] font-semibold text-lg ml-1 text-[#D4AF37]">
                        Rs. {calculateDiscountedPrice(item.price, 0.25)}
                      </span>
                      <span className="ml-1 text-lg font-semibold text-[#D4AF37]">
                        (25% off)
                      </span>
                    </>
                  ) : ( */}
                  <span className="font-['Raleway'] font-medium ">
                    Rs. {item.price}
                  </span>
                  {/* )} */}
                </p>

                <button
                  onClick={() => {
                    setPopUp(true);
                    setCardUP(index);
                  }}
                  className="text-white text-[16px] font-['raleway'] font-semibold w-[180px] h-[45px] bg-[#D4AF37] rounded-[5px] mt-[10px] "
                >
                  BOOK NOW
                </button>
                {cardUP === index && popUp && (
                  <ServiceMainBookPopUp
                    setPopUp={setPopUp}
                    itemName={item.name}
                    itemPrice={item.price}
                    itemDescription={item.description}
                    itemCategory={item.category}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ServicesMainPackages;
