import React from "react";
import { homeCover } from "../assets/asset";

function HeaderSlider() {
  return (
    <div className="relative w-full h-full flex items-end justify-center ">
      <div className="flex flex-col ">
        <img className=" h-[650px] max-[700px]:h-[500px] " src={homeCover.home1} alt="" />
      </div>
      <div className="absolute w-full bottom-[130px] max-[630px]:bottom-[120px] max-[510px]:bottom-[115px] flex flex-col items-center text-center z-30 px-[10px] ">
        <h2 className=" text-[50px] max-[630px]:text-[40px] max-[510px]:text-[35px] max-[440px]:text-[30px] font-[600] font-['Playfair+Display'] text-white [text-shadow:_6px_6px_10px_rgba(0,0,0,0.3)] ">
          PHOTOSHOOT MAKEUP
        </h2>
        <p className="  text-white text-[20px] max-[630px]:text-[18px] max-[510px]:text-[16px] max-[440px]:text-[15px] font-[400] font-['Raleway'] ">
          We do all forms of makeup.
        </p>
      </div>
    </div>
  );
}

export default HeaderSlider;
