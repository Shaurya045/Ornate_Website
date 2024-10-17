import React from "react";
import { icons } from "../assets/asset";

function ServicesTraningTestimonial() {
  return (
    <div
      className="w-full h-[650px py-[60px] flex flex-row max-[1024px]:flex-col justify-center items-center gap-[40px] max-[601px]:gap-[20px] "
      style={{
        backgroundImage: `url(${icons.testimonialBG})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-[20px] max-w-[30%] max-[1024px]:max-w-[85%] self-center ">
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
      <div className="min-w-[37%] max-w-[30%] max-[1024px]:max-w-[85%] flex flex-col gap-[25px] ">
        <div className="w-[80%] h-[40%] max-[601px]:w-full rounded-[20px] bg-white self-end p-[10px] flex flex-col gap-[20px] max-[601px]:gap-[10px] ">
          <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center gap-[20px] max-[601px]:gap-[10px] ">
              {/* <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D9D9D9] "></div> */}
              <h3 className="text-[17px] pl-[10px] max-[601px]:text-[15px] font-['Raleway'] font-semibold ">
                Anjali Sharma
              </h3>
            </div>
            <img
              className="ml-auto w-[100px] h-[20px] max-[601px]:w-[70px] max-[601px]:h-[16px] "
              src={icons.stars}
              loading="lazy"
              alt=""
            />
          </div>
          <p className="font-['Raleway'] font-normal text-[15px] max-[601px]:text-[13px] ">
            From the moment I sat in the chair, I knew I was in good hands.
            Ornate Makeup Studio worked wonders on my makeup, bringing my bridal
            vision to life flawlessly!
          </p>
        </div>
        <div className="w-[80%] h-[40%] max-[601px]:w-full rounded-[20px] bg-white self-start p-[10px] flex flex-col gap-[20px] max-[601px]:gap-[10px] ">
          <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center gap-[20px] max-[601px]:gap-[10px] ">
              {/* <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D9D9D9] "></div> */}
              <h3 className="text-[17px] pl-[10px] max-[601px]:text-[15px] font-['Raleway'] font-semibold ">
                Priya Srivastava
              </h3>
            </div>
            <img
              className="ml-auto w-[100px] h-[20px] max-[601px]:w-[70px] max-[601px]:h-[16px] "
              src={icons.stars}
              loading="lazy"
              alt=""
            />
          </div>
          <p className="font-['Raleway'] font-normal text-[15px] max-[601px]:text-[13px] ">
            I couldn't have asked for a better makeup artist on my big day.
            Ornate Makeup Studio made me feel like the most beautiful version of
            myself, and I was blown away by their skill and professionalism.
          </p>
        </div>
        <div className="w-[80%] h-[40%] max-[601px]:w-full rounded-[20px] bg-white self-end p-[10px] flex flex-col gap-[20px] max-[601px]:gap-[10px] ">
          <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center gap-[20px] max-[601px]:gap-[10px] ">
              {/* <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D9D9D9] "></div> */}
              <h3 className="text-[17px] pl-[10px] max-[601px]:text-[15px] font-['Raleway'] font-semibold ">
                Neha Tyagi
              </h3>
            </div>
            <img
              className="ml-auto w-[100px] h-[20px] max-[601px]:w-[70px] max-[601px]:h-[16px] "
              src={icons.stars}
              loading="lazy"
              alt=""
            />
          </div>
          <p className="font-['Raleway'] font-normal text-[15px] max-[601px]:text-[13px] ">
            The team at Ornate Makeup Studio is incredible. They created a
            stunning look for my reception that lasted all night and looked
            perfect in every photo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesTraningTestimonial;
