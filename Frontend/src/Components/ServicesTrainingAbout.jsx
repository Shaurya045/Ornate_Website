import React from "react";
import { icons, images } from "../assets/asset";

function ServicesTrainingAbout() {
  return (
    <div className="flex flex-col px-[100px] max-[1024px]:px-[70px] max-[701px]:px-[30px] my-[100px] gap-[60px] w-full">
      <div className="flex flex-row gap-[50px]">
        <div className="flex flex-col gap-[40px] max-[701px]:gap-[20px] w-[55%] max-[1024px]:w-full ">
          <h2 className="text-[#4A4745] text-[42px] max-[701px]:text-[35px] font-bold font-['Playfair+Display']">
            About the Program
          </h2>
          <p className="text-[#6B6560] text-[28px] max-[701px]:text-[20px] font-['Lora'] ">
            Unlock your inner artist with our exclusive Makeup Training Program
            at Ornate Makeup Studio. Our expert instructors provide hands-on
            training in various makeup techniques, from everyday looks to
            glamorous bridal styles. Whether you're a beginner or looking to
            refine your skills, our personalized sessions will help you master
            the art of makeup. Book your slot today and transform your passion
            into profession!
          </p>
          <div className="w-full h-[480px] rounded-[10px] min-[1025px]:hidden">
            <img
              className="w-full h-full object-cover rounded-[10px] "
              src={images.trainingaboutImg}
              alt=""
            />
          </div>
          <div className="flex flex-row gap-[50px] max-[701px]:mt-[15px] max-[1024px]:justify-center ">
            <button className="text-white bg-[#D4AF37] w-[250px] h-[60px] max-[701px]:w-[200px] max-[701px]:h-[50px] rounded-[10px] text-[16px] max-[701px]:text-[15px] font-semibold ">
              BOOK A SLOT
            </button>
          </div>
        </div>
        <div className="w-[45%] h-[600px] rounded-[10px] max-[1024px]:hidden">
          <img
            className="w-full h-full ml-auto object-cover rounded-[10px] "
            src={images.trainingaboutImg}
            alt=""
          />
        </div>
      </div>
      <div className="relative flex flex-row max-[650px]:flex-col max-[650px]:items-center w-full h-[230px] max-[650px]:h-[460px] bg-[#D4AF37] rounded-[12px] overflow-hidden">
        <div className="ml-0 relative flex flex-row w-[320px] max-[1401px]:w-[250px] h-full max-[650px]:h-[210px] max-[650px]:w-full bg-[#B69836] ">
          <img className="ml-0" src={icons.flower1} alt="" />
          <img
            className="absolute left-[30%] top-[25%] max-[1401px]:w-[120px] max-[1401px]:left-[27%] max-[650px]:left-[39%] max-[540px]:left-[35%] max-[426px]:left-[31%] "
            src={icons.clock}
            alt=""
          />
        </div>
        <div className="pl-[40px] max-[650px]:pl-0 max-[650px]:pt-[25px] flex flex-row gap-[60px] max-[1100px]:flex-col max-[1100px]:gap-[20px] items-center max-[1100px]:justify-center max-[1100px]:items-start text-white z-10">
          <h2 className="text-[28px] max-[1401px]:text-[25px] font-bold font-['Playfair+Display'] ">
            OPENING HOURS
          </h2>
          <div className="flex-flex-col">
            <h3 className="text-[18px] max-[1401px]:text-[16px] font-semibold font-['Raleway'] ">
              MONDAY TO FRIDAY
            </h3>
            <p className="text-[25px] max-[1401px]:text-[22px] font-bold font-['Raleway'] ">
              09:00 AM - 06:00 PM
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[18px] max-[1401px]:text-[16px] font-semibold font-['Raleway'] ">
              SATURDAY
            </h3>
            <p className="text-[25px] max-[1401px]:text-[22px] font-bold font-['Raleway'] ">
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
