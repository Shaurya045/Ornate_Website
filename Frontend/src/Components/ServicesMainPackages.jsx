import React, { useState } from "react";
import { package_list } from "../assets/asset";

function ServicesMainPackages() {
  const [showPackages, setShowPackages] = useState(false);
  // Utility function to determine the font size based on the name length
  const getFontSize = (name) => {
    if (name.length > 30) {
      return "30px";
    } else if (name.length > 20) {
      return "35px";
    } else {
      return "45px";
    }
  };
  return (
    <div className={`w-full py-[80px] px-[100px] max-[451px]:px-[30px] max-[821px]:px-[50px] flex flex-row gap-[80px] max-[1025px]:flex-col `}>
      <div className="w-[25%] flex flex-col max-[1025px]:w-full ">
        <div className="flex flex-col gap-[5px] ">
          <div
            className="flex flex-row p-[10px] items-center justify-center cursor-pointer "
            onClick={() => setShowPackages(!showPackages)}
          >
            <h2 className="font-['Lora'] font-medium text-[30px] ">Packages</h2>
            <div
              className={`${
                showPackages ? "hidden" : "block"
              } border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto`}
            ></div>
            <div
              className={`${
                showPackages ? "block" : "hidden"
              } mt-[15px] border-t-[10px] border-t-[#4A4745] border-b-[12px] border-b-transparent border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent ml-auto`}
            ></div>
          </div>
          <ul
            className={`${
              showPackages ? "block" : "hidden"
            } flex flex-col gap-[5px] px-[10px] w-[90%] text-[17px]`}
          >
            <li className="font-medium cursor-pointer hover:bg-[#D4AF37] hover:rounded-[5px] hover:text-[#EFE6DD] px-[5px] ">
              Part Makeup
            </li>
            <li className="font-medium cursor-pointer hover:bg-[#D4AF37] hover:rounded-[5px] hover:text-[#EFE6DD] px-[5px]">
              Engagment/ Reception/ Pre-Wedding Makeup
            </li>
            <li className="font-medium cursor-pointer hover:bg-[#D4AF37] hover:rounded-[5px] hover:text-[#EFE6DD] px-[5px]">
              Bridal
            </li>
          </ul>
          <hr className="h-[3px] bg-black " />
        </div>
        <div>
          <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">
              Specifics
            </h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
          </div>
          <hr className="h-[3px] bg-black " />
        </div>
        <div>
          <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">
              Festive Offers
            </h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
          </div>
          <hr className="h-[3px] bg-black " />
        </div>
        {/* <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">Styling</h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
        </div>
        <hr className="h-[3px] bg-black " /> */}
      </div>
      <div className="w-[75%] grid min-[724px]:grid-cols-[repeat(2,1fr)] gap-[40px] max-[1025px]:w-full ">
        {package_list.map((item, index) => (
          <div
            key={index}
            className=" h-[500px] relative col-span-1 row-span-1 rounded-[10px] overflow-hidden flex justify-center "
          >
            <div className="w-full h-full">
              {/* <img
              className="w-full h-full object-cover"
              src={images.homePort2}
              alt=""
            /> */}
            </div>
            <div className=" absolute bottom-[-60%] left-[-18%] w-[150%] h-[600px] bg-[#8B5E3C] blur-[110px] "></div>
            <div
              className={` absolute self-end flex flex-col gap-[0px] items-center mb-[45px] px-[8px] `}
            >
              <h2
                className="text-[#EFE6DD] font-['Playfair+Display'] font-semibold leading-[50px] text-center [text-shadow:_6px_6px_10px_rgba(0,0,0,0.5)] mb-[20px] "
                style={{ fontSize: getFontSize(item.name) }}
              >
                {item.name}
              </h2>
              <p className="text-white text-[16px] font-['Raleway'] font-light ">
                Starting from{" "}
                <span className="font-['Raleway'] font-medium ">
                  Rs. {item.price}
                </span>
              </p>
              <h3 className="text-white text-[23px] font-['Raleway'] font-medium [text-shadow:_3px_3px_8px_rgba(0,0,0,0.5)] ">
                {item.description}
              </h3>
              <button className="text-white text-[16px] font-['raleway'] font-semibold w-[180px] h-[45px] bg-[#D4AF37] rounded-[5px] mt-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesMainPackages;
