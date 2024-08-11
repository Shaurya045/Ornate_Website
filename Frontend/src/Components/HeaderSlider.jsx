import React from "react";
import { homeCover } from "../assets/asset";

function HeaderSlider() {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          className="absolute bottom-0 left-[33%] h-[650px]"
          src={homeCover.home1}
          alt=""
        />
        <h2 className="absolute left-[31.2%] bottom-[150px] text-[50px] font-[600] font-['Playfair+Display'] text-white [text-shadow:_6px_6px_10px_rgba(0,0,0,0.3)] ">
          PHOTOSHOOT MAKEUP
        </h2>
        <p className="absolute left-[41.8%] bottom-[120px] text-white text-[20px] font-[400] font-['Raleway'] ">
          We do all forms of makeup.
        </p>
      </div>
    </div>
  );
}

export default HeaderSlider;
