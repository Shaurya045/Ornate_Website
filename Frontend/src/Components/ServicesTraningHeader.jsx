import React from "react";
import { images } from "../assets/asset";

function ServicesTraningHeader() {
  return (
    <div className="w-full h-[750px] bg-[#F5D8C2] ">
      <div className="flex flex-row gap-[40px] pt-[250px] justify-center px-[120px] ">
        <div className="flex flex-col items-center text-center self-center w-[60%] ">
          <h3 className="text-[30px] text-[#D4AF37] font-['Raleway'] font-semibold ">Cosmetology Training Program</h3>
          <h1 className="text-[60px] text-[#4A4745] font-['Playfair+Display'] font-bold leading-[70px] ">Learn from the Best Cosmetology Experts</h1>
          <button className="w-[200px] h-[50px] rounded-[5px] bg-[#D4AF37] text-white font-semibold mt-[30px] ">BOOK NOW</button>
        </div>
        <div className="rounded-[10px] overflow-hidden w-[650px] h-[400px]">
            <img className="w-full h-full object-cover " src={images.trainingheadImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesTraningHeader;
