import React from "react";
import { icons, images } from "../assets/asset";

function ServicesTrainingAbout() {
  return (
    <div className="flex flex-col px-[100px] my-[100px] gap-[60px] w-full">
      <div className="flex flex-row gap-[50px]">
        <div className="flex flex-col gap-[40px] w-[50%] ">
          <h2 className="text-[#4A4745] text-[42px] font-bold font-['Playfair+Display']">
            About the Program
          </h2>
          <p className="text-[#6B6560] text-[28px] font-['Lora'] ">
            Unlock your inner artist with our exclusive Makeup Training Program
            at Ornate Makeup Studio. Our expert instructors provide hands-on
            training in various makeup techniques, from everyday looks to
            glamorous bridal styles. Whether you're a beginner or looking to
            refine your skills, our personalized sessions will help you master
            the art of makeup. Book your slot today and transform your passion
            into profession!
          </p>
          <div className="flex flex-row gap-[50px]">
            <button className="text-white bg-[#D4AF37] w-[250px] h-[60px] rounded-[10px] text-[16px] font-[500] ">
              BOOK A SLOT
            </button>
          </div>
        </div>
        <img className="h-[600px] ml-auto " src={images.trainingaboutImg} alt="" />
      </div>
      <div className="relative flex flex-row w-full h-[230px] bg-[#D4AF37] rounded-[12px] overflow-hidden">
        <div className="ml-0 relative flex flex-row w-[320px] h-full bg-[#B69836] ">
          <img className="ml-0" src={icons.flower1} alt="" />
          <img
            className="absolute left-[30%] top-[25%]"
            src={icons.clock}
            alt=""
          />
        </div>
        <div className="pl-[40px] flex flex-row gap-[80px] items-center text-white z-10">
          <h2 className="text-[28px] font-bold font-['Playfair+Display'] ">
            OPENING HOURS
          </h2>
          <div className="flex-flex-col">
            <h3 className="text-[18px] font-semibold font-['Raleway'] ">
              MONDAY TO FRIDAY
            </h3>
            <p className="text-[25px] font-bold font-['Raleway'] ">
              09:00 AM - 06:00 PM
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[18px] font-semibold font-['Raleway'] ">
              SATURDAY
            </h3>
            <p className="text-[25px] font-bold font-['Raleway'] ">
              11:00 AM - 03:00 PM
            </p>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-0 h-[150px]"
          src={icons.flower2}
          alt=""
        />
      </div>
    </div>
  );
}

export default ServicesTrainingAbout;
