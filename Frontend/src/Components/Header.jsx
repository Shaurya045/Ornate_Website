import React from "react";
import { icons } from "../assets/asset";
import Button from "./Button";
import HeaderSlider from "./HeaderSlider";

function Header() {
  return (
    <div className="w-full h-[750px] relative">
      <div className="w-full h-full flex">
        <div className="relative w-[50%] h-full bg-gradient-to-tr from-[#FFC296] to-[#EFE6DD] ">
          <h3 className='ornateHome absolute bottom-[30px] right-[100px] text-[170px] font-[400] opacity-[4%] font-["Playfair+Display"] '>
            ORNATE
          </h3>
        </div>
        <div className="relative w-[50%] h-full bg-[#8B5E3C]">
          <img
            className="absolute left-0 top-[50px] h-[700px]  opacity-[30%] "
            src={icons.logo2}
            alt=""
          />{" "}
        </div>
      </div>
      <HeaderSlider />
      <div className="absolute left-[39.4%] bottom-[45px] flex flex-row gap-[40px] ">
        <button className="text-white bg-[#B8B3AE] w-[150px] h-[40px] rounded-[10px] text-[16px] font-[500] ">
          LEARN MORE
        </button>
        <Button />
      </div>
    </div>
  );
}

export default Header;
