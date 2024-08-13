import React from "react";

function HomeServices() {
  return (
    <div className="flex flex-col items-center py-[80px] gap-[50px] ">
      <h2 className="self-start pl-[130px] text-[40px] font-['playfir+Display'] font-bold ">
        Our Services
      </h2>
      <div className="flex flex-row justify-between w-full h-[350px] gap-[50px] ">
        <button className="w-[60px] h-full flex justify-center items-center ">
          <span className="text-[40px] ">&lt;</span>
        </button>
        <div className="w-full h-full flex flex-row gap-[30px] items-center text-center overflow-x-scroll scrollbar-hide ">
          <div className="w-[600px] h-full bg-pink-200 ">1</div>
          <div className="w-[600px] h-full bg-pink-200 ">1</div>
          <div className="w-[600px] h-full bg-pink-200 ">1</div>
        </div>
        <button className="w-[60px] h-full flex justify-center items-center ">
          <div className="text-[40px]">&gt;</div>
        </button>
      </div>
      <button className="w-[180px] h-[40px] rounded-[5px] bg-[#D4AF37] text-white font-semibold ">
        SEE ALL
      </button>
    </div>
  );
}

export default HomeServices;
