import React from "react";
import { images } from "../assets/asset";

function PortfolioBridal() {
  return (
    <div className="grid gap-[0px] grid-cols-[repeat(3,1fr)] grid-rows-[repeat(10,1fr)] h-[200vh] max-[1024px]:h-[110vh] w-full text-white px-[100px] max-[1024px]:px-[20px] pt-[60px] pb-[150px] ">
      <div className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full   "
          src={images.bridal1}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-4 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full "
          src={images.bridal2}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full "
          src={images.bridal3}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal4}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-2 col-start-2  duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal5}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-3 col-start-3 row-start-3 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal6}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal7}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-2 col-start-2 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal8}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-4 col-start-3 row-start-6 duration-[0.5s] hover:scale-[1.05]">
        <img
          className="object-cover w-full h-full"
          src={images.bridal9}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal10}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal11}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="bg-black col-span-1 row-span-1 duration-[0.5s] hover:scale-[1.05] ">
        <img
          className="object-cover w-full h-full"
          src={images.bridal12}
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
}

export default PortfolioBridal;
