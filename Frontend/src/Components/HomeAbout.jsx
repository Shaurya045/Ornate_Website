import React from "react";
import { icons } from "../assets/asset";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div className="flex flex-col px-[100px] max-[1024px]:px-[70px] max-[701px]:px-[30px] my-[200px] max-[1024px]:my-[160px] max-[701px]:my-[130px] gap-[60px] w-full">
      <div className="flex flex-row gap-[50px] h-full">
        <div className="max-[1024px]:hidden w-[45%] h-full flex flex-col ">
          <div className="w-full h-[500px rounded-[50%] bg-gray-300 overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src={icons.aboutImg}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-[130px] h-[130px] rounded-[50%] bg-[#D3BCA8] "></div>
        </div>
        <div className="flex flex-col gap-[40px] max-[701px]:gap-[20px] w-[55%] max-[1024px]:w-full ">
          <h2 className="text-[#4A4745] text-[42px] max-[701px]:text-[35px] font-bold font-['Playfair+Display']">
            Learn Makeup From Our Experts
          </h2>
          <div className="w-[60%] max-[768px]:w-[75%] rounded-[50%] bg-gray-300 overflow-hidden self-center min-[1025px]:hidden">
            <img
              className="w-full object-cover"
              src={icons.aboutImg}
              loading="lazy"
              alt=""
            />
          </div>
          <p className="text-[#6B6560] text-[28px] max-[701px]:text-[20px] font-['Lora'] ">
            Unlock your inner artist with our exclusive Makeup Training Program
            at Ornate Makeup Studio. Our expert instructors provide hands-on
            training in various makeup techniques, from everyday looks to
            glamorous bridal styles. Whether you're a beginner or looking to
            refine your skills, our personalized sessions will help you master
            the art of makeup. Book your slot today and transform your passion
            into profession!
          </p>
          <div className="flex flex-row gap-[50px] max-[701px]:mt-[15px] max-[701px]:gap-[20px] max-[701px]:flex-col max-[701px]:items-center">
            {/* <button className="text-white bg-[#B8B3AE] w-[250px] h-[60px] max-[701px]:w-[200px] max-[701px]:h-[50px] rounded-[10px] text-[16px] max-[701px]:text-[15px] font-[500] ">
              LEARN MORE
            </button> */}
            <Link to="/services/training">
            <button className="text-white bg-[#D4AF37] w-[250px] h-[60px] max-[701px]:w-[200px] max-[701px]:h-[50px] rounded-[10px] text-[16px] max-[701px]:text-[15px] font-[500] ">
              BOOK A SLOT
            </button></Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row max-[650px]:flex-col max-[650px]:items-center w-full h-[230px] max-[650px]:h-[460px] bg-[#D4AF37] rounded-[12px] overflow-hidden">
        <div className="ml-0 relative flex flex-row w-[320px] max-[1401px]:w-[250px] h-full max-[650px]:h-[210px] max-[650px]:w-full bg-[#B69836] ">
          <img className="ml-0" src={icons.flower1} loading="lazy" alt="" />
          <img
            className="absolute left-[30%] top-[25%] max-[1401px]:w-[120px] max-[1401px]:left-[27%] max-[650px]:left-[39%] max-[540px]:left-[35%] max-[426px]:left-[31%] "
            src={icons.clock}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="pl-[40px] max-[650px]:pl-0 max-[650px]:pt-[25px] flex flex-row gap-[60px] max-[1100px]:flex-col max-[1100px]:gap-[20px] items-center max-[1100px]:justify-center max-[1100px]:items-start text-white z-10">
          <h2 className="text-[28px] max-[1401px]:text-[25px] font-bold font-['Playfair+Display'] ">
            OPENING HOURS
          </h2>
          <div className="flex-flex-col">
            <h3 className="text-[18px] max-[1401px]:text-[16px] font-semibold font-['Raleway'] ">
              MONDAY TO SUNDAY
            </h3>
            <p className="text-[25px] max-[1401px]:text-[22px] font-bold font-['Raleway'] ">
              10:30 AM - 07:30 PM
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[18px] max-[1401px]:text-[16px] font-semibold font-['Raleway'] ">
              THURSDAY
            </h3>
            <p className="text-[25px] max-[1401px]:text-[22px] font-bold font-['Raleway'] ">
              12:00 PM - 07:30 PM
            </p>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-0 h-[150px]"
          src={icons.flower2}
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeAbout;
