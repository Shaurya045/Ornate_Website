import React from "react";
import { icons } from "../assets/asset";

function HomeYoutube() {
  return (
    <div
      className="w-full h-[680px] pt-[80px] flex flex-col items-center gap-[50px] "
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
      <div className="flex flex-row gap-[40px]">
        <div className="w-[450px] h-[300px] rounded-[20px] overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VniLh4y3N5I?si=2ZQK4_tZqqbShwwD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[450px] h-[300px] rounded-[20px] overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gADSJ8U4IlY?si=fw81MPsQ6JnLYOOO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[450px] h-[300px] rounded-[20px] overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Cm8sc4DFE4A?si=Llzkqw0qhAYMqdzp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <a href="https://www.youtube.com/@OrnatemakeupStudio" target="_blank" >
        <button className="bg-[#D4AF37] w-[180px] h-[45px] text-white font-semibold font-['Raleway'] rounded-[10px] shadow-lg ">
          SEE ALL
        </button>
      </a>
    </div>
  );
}

export default HomeYoutube;
