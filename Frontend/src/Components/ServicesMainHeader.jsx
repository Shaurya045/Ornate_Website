import React from "react";
import { servicesSlider } from "../assets/asset";

function ServicesMainHeader() {
  return (
    <div className="w-full h-[750px] overflow-hidden relative ">
      <img
        className="w-full h-full object-cover"
        src={servicesSlider.servicesSlider1}
        alt=""
      />
      <div className="absolute bottom-[10%] left-[10%] flex flex-col max-[768px]:gap-[5px] max-w-[90%] max-[768px]:max-w-[80%] ">
        <h2 className="text-[#D4AF37] font-['Raleway'] font-medium text-[40px] max-[768px]:text-[35px] ">10% off</h2>
        <h1 className="text-[#EFE6DD] font-['Playfair+Display'] font-bold text-[70px] max-[768px]:text-[60px] max-[768px]:leading-[70px] ">Festive Season Sale</h1>
        <p className="text-white font-['Lora'] font-medium text-[16px] max-w-[50%] max-[768px]:max-w-[100%] ">
          Celebrate the festive season with stunning makeovers at Ornate Makeup
          Studio! Enjoy exclusive discounts on Bridal and Special Occasion
          makeup. Book your appointment today!
        </p>
        <button className="bg-[#D4AF37] font-['Raleway'] font-semibold text-[16px] text-white w-[180px] h-[50px] rounded-[5px] mt-[40px] max-[768px]:mt-[30px] ">BOOK NOW</button>
      </div>
    </div>
  );
}

export default ServicesMainHeader;
