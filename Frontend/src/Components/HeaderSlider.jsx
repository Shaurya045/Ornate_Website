import React, { useState, useEffect } from "react";
import { homeCover } from "../assets/asset";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function HeaderSlider() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev === homeCover.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? homeCover.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (window.screen.availWidth <= 640) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-end justify-center ">
      <FaArrowLeftLong
        onClick={prevSlide}
        className="absolute w-[50px] h-[50px] max-[640px]:hidden text-white z-10 left-[1rem] bottom-[40%] hover:cursor-pointer drop-shadow-[1px_1px_10px_#555] "
      />
      {homeCover.map((item, index) => {
        return (
          <div
            key={index}
            className={`absolute w-full h-full flex items-end justify-center transition-opacity duration-[1.3s] ${
              slide === index ? "opacity-100" : "opacity-0"
            } `}
          >
            <div className="flex flex-col ">
              <img
                className=" h-[650px] max-[700px]:h-[500px] "
                src={item.image}
                loading="lazy"
                alt=""
              />
            </div>
            <div className="absolute w-full bottom-[130px] max-[630px]:bottom-[120px] max-[510px]:bottom-[115px] flex flex-col items-center text-center z-30 px-[10px] ">
              <h2 className=" text-[50px] max-[630px]:text-[40px] max-[510px]:text-[35px] max-[440px]:text-[30px] font-[600] font-['Playfair+Display'] text-white [text-shadow:_6px_6px_10px_rgba(0,0,0,0.3)] ">
                {item.title}
              </h2>
              <p className="  text-white text-[20px] max-[630px]:text-[18px] max-[510px]:text-[16px] max-[440px]:text-[15px] font-[400] font-['Raleway'] ">
                We do all forms of makeup.
              </p>
            </div>
          </div>
        );
      })}
      <FaArrowRightLong
        onClick={nextSlide}
        className="absolute w-[50px] h-[50px] max-[640px]:hidden text-white z-10 right-[1rem] bottom-[40%] hover:cursor-pointer drop-shadow-[1px_1px_10px_#555] "
      />
    </div>
  );
}

export default HeaderSlider;
