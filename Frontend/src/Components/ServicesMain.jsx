// import React from "react";
import ServicesMainHeader from "./ServicesMainHeader";
import ServicesMainPackages from "./ServicesMainPackages";
// import ServiceDiscountBanner from "./ServiceBanner";

function ServicesMain() {
  return (
    <div className="bg-[#EFE6DD]">
      <ServicesMainHeader />
      {/* <ServiceDiscountBanner /> */}
      <ServicesMainPackages />
    </div>
  );
}

export default ServicesMain;
