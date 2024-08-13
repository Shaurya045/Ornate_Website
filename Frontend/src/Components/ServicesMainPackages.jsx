import React from "react";

function ServicesMainPackages() {
  return (
    <div className={`w-full py-[80px] px-[100px] flex flex-row gap-[80px]`}>
      <div className="w-[25%] flex flex-col ">
        <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">Packages</h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
        </div>
        <hr className="h-[3px] bg-black " />
        <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">Skin</h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
        </div>
        <hr className="h-[3px] bg-black " />
        <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">Hair</h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
        </div>
        <hr className="h-[3px] bg-black " />
        <div className="flex flex-row p-[10px] items-center">
            <h2 className="font-['Lora'] font-medium text-[30px] ">Styling</h2>
            <div className=" border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[10px] border-l-[#4A4745] border-r-[5px] border-r-transparent ml-auto "></div>
        </div>
        <hr className="h-[3px] bg-black " />
      </div>
      <div className="w-[75%]  grid grid-cols-[repeat(2,1fr)] gap-[40px]">
        <div className="bg-black h-[500px]  col-span-1 row-span-1 rounded-[10px] "></div>
        <div className="bg-black h-[500px] col-span-1 row-span-1 rounded-[10px]"></div>
        <div className="bg-black h-[500px] col-span-1 row-span-1 rounded-[10px]"></div>
        <div className="bg-black h-[500px] col-span-1 row-span-1 rounded-[10px]"></div>
      </div>
    </div>
  );
}

export default ServicesMainPackages;
