import React from "react";
import { icons } from "../assets/asset";
import Button from "./Button";
import HeaderSlider from "./HeaderSlider";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-[750px] max-[700px]:h-[600px] relative overflow-hidden">
      <div className="w-full h-full flex">
        <div className="relative w-[50%] h-full bg-gradient-to-tr from-[#FFC296] to-[#EFE6DD] ">
          <h3 className='ornateHome absolute bottom-[30px] right-[100px] max-[700px]:right-[50px] max-[470px]:right-[10px] text-[170px] max-[700px]:text-[125px] font-[400] opacity-[4%] font-["Playfair+Display"] '>
            ORNATE
          </h3>
        </div>
        <div className="relative w-[50%] h-full bg-[#8B5E3C]">
          <img
            className="absolute left-0 top-[50px] h-[700px] max-[700px]:h-[550px] opacity-[30%] "
            src={icons.logo2}
            loading="lazy"
            alt=""
          />{" "}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center ">
        <div className="flex flex-row items-end justify-center z-10 mb-[-230px] ">
          <div className="w-[466px] h-[286px] bg-[#F5D8C2] blur-[50px] "></div>
          <div className="w-[466px] h-[286px] bg-[#8B5E3C] blur-[50px]"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center ">
        <HeaderSlider />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center ">
        <div className="flex flex-row gap-[40px] max-[510px]:gap-[20px] z-20 items-end mb-[50px] px-[10px] ">
          <Link to="/services/training">
            <button className="text-white bg-[#B8B3AE] w-[150px] max-[510px]:w-[130px] h-[40px] rounded-[10px] text-[16px] max-[510px]:text-[15px] font-semibold ">
              LEARN MORE
            </button>
          </Link>
          <Link to="/services">
            <button className="bg-yellow-400 w-[150px] max-[510px]:w-[130px] h-[40px] rounded-[10px] text-[16px] max-[510px]:text-[15px] font-semibold text-white ">
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
