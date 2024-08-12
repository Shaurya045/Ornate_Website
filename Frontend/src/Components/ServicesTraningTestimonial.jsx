import React from "react";
import { icons } from "../assets/asset";

function ServicesTraningTestimonial() {
  return (
    <div
      className="w-full h-[650px] py-[60px] flex flex-row justify-center gap-[40px] "
      style={{
        backgroundImage: `url(${icons.testimonialBG})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-[20px] max-w-[30%] self-center ">
        <h4 className="font-['Great+Vibes'] text-[#D4AF37] text-[25px] ">
          Our testimonials
        </h4>
        <h1 className="text-[40px] text-[#4A4745] font-['Playfair+Display'] font-bold uppercase leading-[50px] max-w-[80%] ">
          what they're saying?
        </h1>
        <p className="font-['Lora'] text-[16px] text-[#6B6560] ">
          Discover what our clients have to say about their experiences at
          Ornate Makeup Studio. From stunning bridal makeovers to empowering
          makeup lessons, our clients' satisfaction is our top priority. Read
          their stories and see why they trust us with their beauty needs.
        </p>
        <div></div>
      </div>
      <div className="min-w-[37%] max-w-[30%] flex flex-col gap-[25px] ">
        <div className="w-[80%] h-[40%] rounded-[20px] bg-white self-end p-[10px] flex flex-col gap-[20px] ">
          <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center gap-[20px] ">
              <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D9D9D9] "></div>
              <h3 className="text-[17px] font-['Raleway'] font-semibold ">
                Anjali Sharma
              </h3>
            </div>
            <img
              className="ml-auto w-[100px] h-[20px] "
              src={icons.stars}
              alt=""
            />
          </div>
          <p className="font-['Raleway'] font-normal text-[15px] ">
            Ornate Makeup Studio transformed me into a vision of beauty on my
            wedding day. Their attention to detail and artistry is unmatched!
          </p>
        </div>
        <div className="w-[80%] h-[40%] rounded-[20px] bg-white self-start p-[10px] flex flex-col gap-[20px]">
          <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center gap-[20px] ">
              <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D9D9D9] "></div>
              <h3 className="text-[17px] font-['Raleway'] font-semibold ">
                Priya Srivastava
              </h3>
            </div>
            <img
              className="ml-auto w-[100px] h-[20px] "
              src={icons.stars}
              alt=""
            />
          </div>
          <p className="font-['Raleway'] font-normal text-[15px] ">
            Ornate Makeup Studio transformed me into a vision of beauty on my
            wedding day. Their attention to detail and artistry is unmatched!
          </p>
        </div>
        <div className="w-[80%] h-[40%] rounded-[20px] bg-white self-end p-[10px] flex flex-col gap-[20px] ">
          <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center gap-[20px] ">
              <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D9D9D9] "></div>
              <h3 className="text-[17px] font-['Raleway'] font-semibold ">
                Neha Tyagi
              </h3>
            </div>
            <img
              className="ml-auto w-[100px] h-[20px] "
              src={icons.stars}
              alt=""
            />
          </div>
          <p className="font-['Raleway'] font-normal text-[15px] ">
            Ornate Makeup Studio transformed me into a vision of beauty on my
            wedding day. Their attention to detail and artistry is unmatched!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesTraningTestimonial;
