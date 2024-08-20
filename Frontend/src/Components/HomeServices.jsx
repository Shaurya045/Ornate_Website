import React, { useRef, useState, useEffect } from "react";
import { images } from "../assets/asset";

function HomeServices() {
  const [scrollLeft, setScrollLeft] = useState(0);
  const boxRef = useRef(null);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const btnPressNext = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
      setScrollLeft(boxRef.current.scrollLeft);
    }
  };

  const btnPressPrev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
      setScrollLeft(boxRef.current.scrollLeft);
    }
  };

  const handleTouchStart = (e) => {
    setIsTouching(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;
    boxRef.current.scrollLeft += touchDiff;
    setTouchStartX(touchEndX); // Update touchStartX to the current position
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  useEffect(() => {
    const boxElement = boxRef.current;

    if (boxElement) {
      boxElement.addEventListener("touchstart", handleTouchStart);
      boxElement.addEventListener("touchmove", handleTouchMove);
      boxElement.addEventListener("touchend", handleTouchEnd);

      return () => {
        boxElement.removeEventListener("touchstart", handleTouchStart);
        boxElement.removeEventListener("touchmove", handleTouchMove);
        boxElement.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);
  return (
    <div className="flex flex-col items-center py-[80px] max-[712px]:py-[60px] gap-[50px] max-[712px]:gap-[30px] ">
      <h2 className="self-start pl-[100px] max-[900px]:pl-[50px] max-[712px]:pl-[20px] text-[40px] max-[712px]:text-[35px] font-['playfir+Display'] font-bold ">
        Our Services
      </h2>
      <div className="flex flex-row justify-between w-full h-[350px] max-[712px]:h-[280px] gap-[50px] max-[900px]:px-[50px] max-[712px]:px-[20px] ">
        <button
          onClick={btnPressPrev}
          className="w-[60px] max-[900px]:hidden h-full flex justify-center items-center "
        >
          <span className="text-[40px] ">&lt;</span>
        </button>
        <div
          ref={boxRef}
          className="w-full h-full flex flex-row gap-[30px] max-[800px]:gap-[20px] items-center text-center overflow-x-scroll scrollbar-hide "
        >
          {/* map function goes here */}
          <div className="relative h-full rounded-[20px] ">
            <div className="relative h-full rounded-[20px] overflow-hidden ">
              <div className="w-[640px] max-[800px]:w-[600px] max-[712px]:w-[280px] h-full bg-[#D3BCA8] rounded-[20px]"></div>
              <div className="absolute h-full w-[35%] bg-[#CBAB90] top-[0px] left-0 before:content-[''] before:w-full before:h-[420px] max-[712px]:before:h-[300px] before:rotate-[-30deg] max-[712px]:before:rotate-[-19deg] before:bg-[#D3BCA8] before:absolute before:top-[-80px] max-[712px]:before:top-[-20px] before:left-[90px] max-[712px]:before:left-[49px] "></div>
              <div className="absolute right-0 top-0 h-full w-[50%] fadeImg ">
                <img
                  className="h-full w-full object-cover "
                  src={images.homePort3}
                  alt=""
                />
              </div>
              <div className="absolute top-[3.5%] left-[2.5%] rounded-[20px] w-[95%] h-[93%] border-[2px] border-[#EFE6DD]  "></div>
              <div className="absolute bottom-[15%] left-[8%] flex flex-col items-start gap-[10px] max-w-[40%] max-[712px]:max-w-[60%] ">
                <h3 className=" font-['Lora'] font-normal text-[30px] max-[712px]:text-[20px] text-[#F9EFD1] ">
                  10% off
                </h3>
                <h2 className=" font-['Lora'] font-normal text-[35px] max-[712px]:text-[25px] text-[#4A4745] text-start ">
                  High Fashion Makeup
                </h2>
                <button className="w-[130px] max-[712px]:w-[115px] h-[40px] bg-[#D4AF37] rounded-[10px] text-[15px] max-[712px]:text-[14px] text-white font-semibold ">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-full rounded-[20px] ">
            <div className="relative h-full rounded-[20px] overflow-hidden ">
              <div className="w-[640px] max-[800px]:w-[600px] max-[712px]:w-[280px] h-full bg-[#D3BCA8] rounded-[20px]"></div>
              <div className="absolute h-full w-[35%] bg-[#CBAB90] top-[0px] left-0 before:content-[''] before:w-full before:h-[420px] max-[712px]:before:h-[300px] before:rotate-[-30deg] max-[712px]:before:rotate-[-19deg] before:bg-[#D3BCA8] before:absolute before:top-[-80px] max-[712px]:before:top-[-20px] before:left-[90px] max-[712px]:before:left-[49px] "></div>
              <div className="absolute right-0 top-0 h-full w-[50%] fadeImg ">
                <img
                  className="h-full w-full object-cover "
                  src={images.homePort3}
                  alt=""
                />
              </div>
              <div className="absolute top-[3.5%] left-[2.5%] rounded-[20px] w-[95%] h-[93%] border-[2px] border-[#EFE6DD]  "></div>
              <div className="absolute bottom-[15%] left-[8%] flex flex-col items-start gap-[10px] max-w-[40%] max-[712px]:max-w-[60%] ">
                <h3 className=" font-['Lora'] font-normal text-[30px] max-[712px]:text-[20px] text-[#F9EFD1] ">
                  10% off
                </h3>
                <h2 className=" font-['Lora'] font-normal text-[35px] max-[712px]:text-[25px] text-[#4A4745] text-start ">
                  High Fashion Makeup
                </h2>
                <button className="w-[130px] max-[712px]:w-[115px] h-[40px] bg-[#D4AF37] rounded-[10px] text-[15px] max-[712px]:text-[14px] text-white font-semibold ">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-full rounded-[20px] ">
            <div className="relative h-full rounded-[20px] overflow-hidden ">
              <div className="w-[640px] max-[800px]:w-[600px] max-[712px]:w-[280px] h-full bg-[#D3BCA8] rounded-[20px]"></div>
              <div className="absolute h-full w-[35%] bg-[#CBAB90] top-[0px] left-0 before:content-[''] before:w-full before:h-[420px] max-[712px]:before:h-[300px] before:rotate-[-30deg] max-[712px]:before:rotate-[-19deg] before:bg-[#D3BCA8] before:absolute before:top-[-80px] max-[712px]:before:top-[-20px] before:left-[90px] max-[712px]:before:left-[49px] "></div>
              <div className="absolute right-0 top-0 h-full w-[50%] fadeImg ">
                <img
                  className="h-full w-full object-cover "
                  src={images.homePort3}
                  alt=""
                />
              </div>
              <div className="absolute top-[3.5%] left-[2.5%] rounded-[20px] w-[95%] h-[93%] border-[2px] border-[#EFE6DD]  "></div>
              <div className="absolute bottom-[15%] left-[8%] flex flex-col items-start gap-[10px] max-w-[40%] max-[712px]:max-w-[60%] ">
                <h3 className=" font-['Lora'] font-normal text-[30px] max-[712px]:text-[20px] text-[#F9EFD1] ">
                  10% off
                </h3>
                <h2 className=" font-['Lora'] font-normal text-[35px] max-[712px]:text-[25px] text-[#4A4745] text-start ">
                  High Fashion Makeup
                </h2>
                <button className="w-[130px] max-[712px]:w-[115px] h-[40px] bg-[#D4AF37] rounded-[10px] text-[15px] max-[712px]:text-[14px] text-white font-semibold ">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={btnPressNext}
          className="w-[60px] max-[900px]:hidden h-full flex justify-center items-center "
        >
          <span className="text-[40px]">&gt;</span>
        </button>
      </div>
      <button className="w-[180px] h-[40px] rounded-[5px] max-[712px]:mt-[20px] bg-[#D4AF37] text-white font-semibold ">
        SEE ALL
      </button>
    </div>
  );
}

export default HomeServices;
