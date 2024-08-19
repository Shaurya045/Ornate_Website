import React from "react";
import { icons, images } from "../assets/asset";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function HomeTestimonial() {
  return (
    <div
      className="w-full h-[600px] max-[1000px]:h-[750px] max-[520px]:h-[770px] mt-[70px] pb-[20px] pt-[70px] max-[1000px]:pt-[20px] max-[1000px]:pb-[40px] flex flex-row max-[1000px]:flex-col justify-center max-[1000px]:items-start max-[1000px]:px-[70px] max-[730px]:px-[40px] max-[565px]:px-[30px] gap-[40px] max-[730px]:gap-[30px] max-[520px]:gap-[20px] "
      style={{
        backgroundImage: `url(${icons.testimonialBG})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-[20px] max-[730px]:gap-[10px] max-[520px]:gap-[5px] max-w-[30%] max-[1000px]:max-w-[90%] mt-[2%] max-[1000px]:mt-0 ">
        <h4 className="font-['Great+Vibes'] text-[#D4AF37] text-[25px] max-[520px]:text-[22px] ">
          Our testimonials
        </h4>
        <h1 className="text-[40px] max-[520px]:text-[35px] text-[#4A4745] font-['Playfair+Display'] font-bold uppercase leading-[50px] max-w-[90%] ">
          what they're saying?
        </h1>
        <p className="font-['Lora'] text-[16px] max-[520px]:text-[15px] text-[#6B6560] ">
          Discover what our clients have to say about their experiences at
          Ornate Makeup Studio. From stunning bridal makeovers to empowering
          makeup lessons, our clients' satisfaction is our top priority. Read
          their stories and see why they trust us with their beauty needs.
        </p>
        <div className="flex flex-row gap-[20px] max-[520px]:gap-[10px] ">
          <button className="w-[50px] h-[50px] max-[520px]:w-[35px] max-[520px]:h-[35px] bg-white rounded-[50%] flex flex-row items-center justify-center text-[25px] max-[520px]:text-[20px] ">
            <FaArrowLeftLong />
          </button>
          <button className="w-[50px] h-[50px] max-[520px]:w-[35px] max-[520px]:h-[35px] bg-white rounded-[50%] flex flex-row items-center justify-center text-[25px] max-[520px]:text-[20px] ">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="min-w-[37%] max-[1000px]:max-w-[90%] relative">
        <div className="relative w-[300px] max-[1200px]:w-[250px] h-[310px] max-[1200px]:h-[300px] max-[520px]:h-[270px] bg-white flex flex-col gap-[15px] z-10 ">
          <div className="bg-[#D4AF37] mx-[4px] mt-[4px] px-[15px] max-[565px]:px-[10px] py-[8px] flex flex-row items-center gap-[10px] ">
            <div className="w-[30px] h-[30px] rounded-[50%] overflow-hidden min-[566px]:hidden ">
              <img
                className="w-full h-full object-cover"
                src={images.homePort4}
                alt=""
              />
            </div>
            <h4 className="text-white max-[520px]:text-[15px] font-['Raleway'] font-semibold">
              Priya Srivastava
            </h4>
          </div>
          <img className="w-[120px] max-[520px]:w-[110px] mx-[20px] " src={icons.stars} alt="" />
          <p className="px-[20px] max-[1200px]:px-[10px] text-[19px] max-[520px]:text-[17px] font-['Great+Vibes'] mt-[10px] max-[520px]:mt-[5px] ">
            Ornate Makeup Studio transformed me into a vision of beauty on my
            wedding day. Their attention to detail and artistry is unmatched!
          </p>
          <div className="border-b-[35px] border-b-transparent border-r-[80px] border-r-white absolute bottom-[-33px] left-[40%] "></div>
        </div>
        <div className="w-[330px] max-[1200px]:w-[280px] h-[330px] max-[1200px]:h-[280px] rounded-[50%] bg-pink-400 absolute top-[30px] left-[230px] max-[1200px]:left-[195px] overflow-hidden max-[565px]:hidden">
          <img
            className="w-full h-full object-cover"
            src={images.homePort2}
            alt=""
          />
        </div>
        <div className="w-[130px] max-[1200px]:w-[110px] h-[130px] max-[1200px]:h-[110px] rounded-[50%] absolute top-0 z-10 left-[450px] max-[1200px]:left-[380px] overflow-hidden max-[565px]:hidden ">
          <img
            className="w-full h-full object-cover"
            src={images.homePort4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonial;
