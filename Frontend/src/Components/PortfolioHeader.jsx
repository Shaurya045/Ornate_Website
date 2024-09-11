import React from "react";
import { images } from "../assets/asset";
import { Link } from "react-router-dom";

function PortfolioHeader() {
  return (
    <div
      className="w-full h-[750px] max-[767px]:h-[700px] relative "
      style={{
        backgroundImage: `url(${images.portfolioheadImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start gap-[20px] absolute bottom-[10%] left-[10%] max-[767px]:gap-[10px] max-w-[50%] max-[1301px]:max-w-[60%] max-[767px]:max-w-[90%] max-[767px]:left-[7%] ">
        <h3 className="font-['Raleway'] text-[40px] font-medium text-[#D4AF37] max-[767px]:text-[30px] [text-shadow:_3px_3px_8px_rgba(0,0,0,0.8)] ">
          Our Portfolio
        </h3>
        <h1 className="font-['Playfair+Display'] leading-[65px] text-[60px] font-bold text-[#EFE6DD] max-[767px]:text-[40px] max-[767px]:leading-[50px] [text-shadow:_4px_4px_8px_rgba(0,0,0,0.5)] ">
          Transforming Beauty Defining Elegance
        </h1>
        <p className="font-['Lora'] text-[15px] font-noraml text-white max-[767px]:max-w-[95%] [text-shadow:_2px_2px_3px_rgba(0,0,0,0.6)] ">
          Step into our world of elegance and artistry. Discover stunning
          transformations and timeless beauty created by Ornate Makeup Studio.
          Our portfolio showcases the magic we weave with every brushstroke,
          bringing dreams to life for every special occasion.
        </p>
        <Link to="/services">
          <button className="w-[220px] h-[50px] rounded-[5px] text-white bg-[#D4AF37] max-[767px]:mt-[20px] ">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioHeader;
