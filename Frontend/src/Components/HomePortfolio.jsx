import React from "react";
import { icons, images } from "../assets/asset";

function HomePortfolio() {
  return (
    <div className="w-full mx-0 overflow-hidden flex flex-row ">
      <div className="grid gap-[23px] grid-cols-[repeat(3,1fr)] w-[70%]">
        <div className="bg-black col-span-1 row-span-2"><img className="object-cover w-full h-full" src={images.homePort1} alt="" /></div>
        <div className="bg-black col-span-1 row-span-1"><img className="object-cover w-full h-full" src={images.homePort2} alt="" /></div>
        <div className="bg-black col-span-1 row-span-1"><img className="object-cover w-full h-full" src={images.homePort3} alt="" /></div>
        <div className="bg-black col-span-1 row-span-2 col-start-3 row-start-1">
        <img className="object-cover w-full h-full" src={images.homePort4} alt="" />
        </div>
      </div>
      <div className="bg-[#D3BCA8] relative w-[30%]">
        <div className="flex flex-col items-start mt-[20%] ">
          <img
            className="h-[150px] w-[200px]"
            src={icons.homePort_logo}
            alt=""
          />
          <div className="pl-[50px] z-10 flex flex-col gap-[0px]">
            <h2 className="text-[35px] font-bold font-['Playfair+Display'] max-w-[90%] ">
              TRUSTED & RELIABLE SALON.
            </h2>
            <p className="text-[30px] font-semibold font-['Lora'] max-w-[80%]">
              PHOTO GALLERY
            </p>
            <button className="bg-[#D4AF37] w-[200px] h-[50px] text-white font-['Raleway'] font-bold rounded-[10px] mt-[30px] shadow-xl ">
              SEE ALL
            </button>
          </div>
        </div>
        <img
          className="absolute bottom-0 z-[0] "
          src={icons.homePort_flower}
          alt=""
        />
      </div>
    </div>
  );
}

export default HomePortfolio;
