import React from "react";
import { icons } from "../assets/asset";
import { images } from "../assets/asset";
import { Link } from "react-router-dom";

function HomeYoutube() {
  return (
    <div
      className="w-full h-[720px] max-[1270px]:h-[1560px] max-[470px]:h-[1350px] pt-[80px] pb-[30px] flex flex-col items-center gap-[50px] "
      style={{
        backgroundImage: `url(${icons.testimonialBG})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex-flex-col gap-[0px] text-center ">
        <h3 className="font-['Great+Vibes'] text-[#D4AF37] text-[20px] ">
          Social Media
        </h3>
        <h2 className="font-['Playfair+Display'] text-[35px] font-bold text-[#4A4745] ">
          Find Us on Youtube
        </h2>
      </div>
      <div className="flex flex-row gap-[60px] max-[1270px]:flex-col max-[1270px]:items-center ">
        <div className="w-[370px] h-[360px] max-[470px]:w-[300px] max-[470px]:h-[290px] bg-[#EFE6DD] rounded-[10px] flex flex-col gap-[15px] max-[470px]:gap-[5px] pb-[20px] ">
          <div className="w-full h-[60%] rounded-t-[10px] ">
            <img
              className="w-full h-full object-cover rounded-t-[10px]"
              src={images.youtube1}
              alt=""
            />
          </div>
          <div className="w-full h-[39%] px-[20px] max-[470px]:px-[15px] flex flex-col gap-[20px] max-[470px]:gap-[10px] items-center ">
            <h2 className="text-[18px] max-[470px]:text-[16px] font-['Raleway'] font-semibold ">
              Engagement makeup look by Payal Verma
            </h2>
            <Link to="">
              <button className="w-[180px] h-[45px] max-[470px]:w-[150px] max-[470px]:h-[40px] max-[470px]:text-[15px] bg-[#B8AEAE] rounded-[10px] text-white font-semibold ">
                WATCH NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[370px] h-[360px] max-[470px]:w-[300px] max-[470px]:h-[290px] bg-[#EFE6DD] rounded-[10px] flex flex-col gap-[15px] max-[470px]:gap-[5px] pb-[20px] ">
          <div className="w-full h-[60%] rounded-t-[10px] ">
            <img
              className="w-full h-full object-cover rounded-t-[10px]"
              src={images.youtube1}
              alt=""
            />
          </div>
          <div className="w-full h-[39%] px-[20px] max-[470px]:px-[15px] flex flex-col gap-[20px] max-[470px]:gap-[10px] items-center ">
            <h2 className="text-[18px] max-[470px]:text-[16px] font-['Raleway'] font-semibold ">
              Engagement makeup look by Payal Verma
            </h2>
            <Link to="">
              <button className="w-[180px] h-[45px] max-[470px]:w-[150px] max-[470px]:h-[40px] max-[470px]:text-[15px] bg-[#B8AEAE] rounded-[10px] text-white font-semibold ">
                WATCH NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[370px] h-[360px] max-[470px]:w-[300px] max-[470px]:h-[290px] bg-[#EFE6DD] rounded-[10px] flex flex-col gap-[15px] max-[470px]:gap-[5px] pb-[20px] ">
          <div className="w-full h-[60%] rounded-t-[10px] ">
            <img
              className="w-full h-full object-cover rounded-t-[10px]"
              src={images.youtube1}
              alt=""
            />
          </div>
          <div className="w-full h-[39%] px-[20px] max-[470px]:px-[15px] flex flex-col gap-[20px] max-[470px]:gap-[10px] items-center ">
            <h2 className="text-[18px] max-[470px]:text-[16px] font-['Raleway'] font-semibold ">
              Engagement makeup look by Payal Verma
            </h2>
            <Link to="">
              <button className="w-[180px] h-[45px] max-[470px]:w-[150px] max-[470px]:h-[40px] max-[470px]:text-[15px] bg-[#B8AEAE] rounded-[10px] text-white font-semibold ">
                WATCH NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <a href="https://www.youtube.com/@OrnatemakeupStudio" target="_blank">
        <button className="bg-[#D4AF37] w-[180px] h-[45px] text-white font-semibold font-['Raleway'] rounded-[10px] shadow-lg ">
          SEE ALL
        </button>
      </a>
    </div>
  );
}

export default HomeYoutube;
