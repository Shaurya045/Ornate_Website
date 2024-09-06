import React from "react";
import { images } from "../assets/asset";

function ServicesTraningHeader() {
  return (
    <div className="w-full h-[750px] max-[1024px]:h-[700px] bg-[#F5D8C2] ">
      <div className="flex flex-row gap-[40px] pt-[250px] justify-center px-[120px] max-[1024px]:px-[20px] ">
        <div className="flex flex-col items-center text-center self-center w-[60%] max-[1024px]:w-full ">
          <h3 className="text-[30px] text-[#D4AF37] font-['Raleway'] font-semibold max-[600px]:text-[20px] ">
            Cosmetology Training Program
          </h3>
          <h1 className="text-[60px] text-[#4A4745] font-['Playfair+Display'] font-bold leading-[70px] max-[600px]:text-[50px] max-[600px]:leading-[60px] ">
            Learn from the Best Cosmetology Experts
          </h1>
          <a href="#bookSlot">
            <button className="w-[200px] h-[50px] rounded-[5px] bg-[#D4AF37] text-white font-semibold mt-[30px] ">
              BOOK NOW
            </button>
          </a>
        </div>
        <div className="rounded-[10px] overflow-hidden w-[40%] h-[400px] max-[1024px]:hidden ">
          <img
            className="w-full h-full object-cover "
            src={images.trainingheadImg}
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesTraningHeader;
