import React from "react";
import { icons, images } from "../assets/asset";

function HomeTestimonial() {
  return (
    <div
      className="w-full h-[600px] mt-[70px] pt-[80px] flex flex-row justify-center gap-[40px] "
      style={{
        backgroundImage: `url(${icons.testimonialBG})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-[20px] max-w-[30%] mt-[3%]">
        <h4 className="font-['Great+Vibes'] text-[#D4AF37] text-[25px] ">Our testimonials</h4>
        <h1 className="text-[40px] text-[#4A4745] font-['Playfair+Display'] font-bold uppercase leading-[50px] max-w-[80%] ">what they're saying?</h1>
        <p className="font-['Lora'] text-[16px] text-[#6B6560] ">
          Discover what our clients have to say about their experiences at
          Ornate Makeup Studio. From stunning bridal makeovers to empowering
          makeup lessons, our clients' satisfaction is our top priority. Read
          their stories and see why they trust us with their beauty needs.
        </p>
        <div></div>
      </div>
      <div className="min-w-[37%] relative">
        <div className="relative w-[300px] h-[310px] bg-white flex flex-col gap-[15px] z-10 ">
          <div className="bg-[#D4AF37] mx-[4px] mt-[4px] px-[15px] py-[8px] ">
            <h4 className="text-white font-['Raleway'] font-semibold">Priya Srivastava</h4>
          </div>
          <img className="w-[120px] mx-[20px] " src={icons.stars} alt="" />
          <p className="mx-[20px] text-[19px] font-['Great+Vibes'] mt-[10px] ">Ornate Makeup Studio transformed me into a vision of beauty on my wedding day. Their attention to detail and artistry is unmatched!</p>
          <div className="border-b-[35px] border-b-transparent border-r-[80px] border-r-white absolute bottom-[-35px] left-[40%] "></div>
        </div>
        <div className="w-[330px] h-[330px] rounded-[50%] bg-pink-400 absolute top-[30px] left-[230px] overflow-hidden">
            <img className="w-full h-full object-cover" src={images.homePort2} alt="" />
        </div>
        <div className="w-[130px] h-[130px] rounded-[50%] absolute top-0 z-10 left-[450px] overflow-hidden ">
            <img className="w-full h-full object-cover" src={images.homePort4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonial;
