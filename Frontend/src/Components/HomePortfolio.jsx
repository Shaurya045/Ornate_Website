import React from "react";
import { icons, images } from "../assets/asset";
import { Link } from "react-router-dom";

function HomePortfolio() {
  return (
    <div className="w-full mx-0 overflow-hidden flex flex-row max-[1023px]:flex-col ">
      <div className="grid gap-[23px] max-[700px]:gap-[10px] grid-cols-[repeat(3,1fr)] w-[70%] max-[1023px]:w-full ">
        <div className="bg-black col-span-1 row-span-2">
          <img
            className="object-cover w-full h-full"
            src={images.homePort1}
            alt=""
          />
        </div>
        <div className="bg-black col-span-1 row-span-1">
          <img
            className="object-cover w-full h-full"
            src={images.homePort2}
            alt=""
          />
        </div>
        <div className="bg-black col-span-1 row-span-1">
          <img
            className="object-cover w-full h-full"
            src={images.homePort3}
            alt=""
          />
        </div>
        <div className="bg-black col-span-1 row-span-2 col-start-3 row-start-1">
          <img
            className="object-cover w-full h-full"
            src={images.homePort4}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#D3BCA8] relative w-[30%] max-[1023px]:w-full ">
        <div className="flex flex-col max-[1023px]:items-center max-[1023px]:justify-center mt-[20%] max-[1023px]:mt-[3%] ">
          <div className="h-[150px] w-[200px] max-[570px]:h-[100px] max-[570px]:w-[150px] ">
            <img
              className="h-full w-full object-cover"
              src={icons.homePort_logo}
              alt=""
            />
          </div>
          <div className="pl-[50px] max-[1023px]:pl-0 max-[570px]:px-[5px] z-10 flex flex-col max-[1023px]:items-center gap-[0px]">
            <h2 className="text-[35px] font-bold font-['Playfair+Display'] max-w-[90%] max-[1023px]:max-w-[100%] max-[570px]:text-[23px] max-[1023px]:text-center ">
              TRUSTED & RELIABLE SALON.
            </h2>
            <p className="text-[30px] font-semibold font-['Lora'] max-w-[80%] max-[570px]:text-[20px]">
              PHOTO GALLERY
            </p>
            <Link to="/portfolio">
              <button className="bg-[#D4AF37] w-[200px] max-[570px]:w-[150px] h-[50px] max-[570px]:h-[40px] max-[570px]:text-[15px] text-white font-['Raleway'] font-bold rounded-[10px] mt-[30px] max-[570px]:mt-[20px] mb-[30px] shadow-xl ">
                SEE ALL
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 z-[0] w-full h-full ">
          <img
            className="w-full h-full object-cover "
            src={icons.homePort_flower}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio;
