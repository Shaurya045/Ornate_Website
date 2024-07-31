import React from "react";
import Button from "./Button";
import { icons } from "../assets/asset";

function Navbar() {
  return (
    <div className="relative mt-[30px] mx-[150px] flex flex-col gap-[20px] z-50">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-[20px] items-center ">
          <img className="h-[60px]" src={icons.logo} alt="Logo" />
          <h1 className="text-[30px] font-[600] font-['Playfair+Display'] ">Ornate Makeup Studio</h1>
        </div>
        <div className="flex flex-row gap-[20px] items-center ">
          <h3 className="text-[18px] font-[500] text-white font-['Playfair+Display'] ">
            (+91)99340 59935
          </h3>
          <Button />
        </div>
      </div>
      <div className="mx-[100px]">
        <ul className="flex flex-row justify-between text-[20px] font-[500] font-['Raleway'] ">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
