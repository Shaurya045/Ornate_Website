import React from "react";
import ServicesTraningHeader from "./ServicesTraningHeader";
import ServicesTrainingAbout from "./ServicesTrainingAbout";
import ServicesTraningTestimonial from "./ServicesTraningTestimonial";
import { images } from "../assets/asset";

function ServicesTraning() {
  return (
    <div className="bg-[#EFE6DD]">
      <ServicesTraningHeader />
      <ServicesTrainingAbout />
      <div className="flex flex-col items-center gap-[20px] mb-[80px] ">
        <h2 className="text-[35px] text-[#4A4745] font-['Playfair+Display'] font-bold ">Glimpses from the Training Program</h2>
        <img src={images.traininggridImg} alt="" />
      </div>
      <ServicesTraningTestimonial />
    </div>
  );
}

export default ServicesTraning;
