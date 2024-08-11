import React from "react";
import { images } from "../assets/asset";

function PortfolioHeader() {
  return (
    <div
      className="w-full h-[750px] relative "
      style={{
        backgroundImage: `url(${images.portfolioheadImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-start gap-[20px] absolute bottom-[10%] left-[10%] w-[40%] ">
        <h3 className="font-['Raleway'] text-[40px] font-normal text-[#D4AF37] ">
          Our Portfolio
        </h3>
        <h1 className="font-['Playfair+Display'] leading-[65px] text-[60px] font-bold text-[#EFE6DD] ">
          Transforming Beauty Defining Elegance
        </h1>
        <p className="font-['Lora'] text-[15px] font-noraml text-white ">
          Step into our world of elegance and artistry. Discover stunning
          transformations and timeless beauty created by Ornate Makeup Studio.
          Our portfolio showcases the magic we weave with every brushstroke,
          bringing dreams to life for every special occasion.
        </p>
        <button className="w-[220px] h-[50px] rounded-[5px] text-white bg-[#D4AF37] ">BOOK NOW</button>
      </div>
    </div>
  );
}

export default PortfolioHeader;
