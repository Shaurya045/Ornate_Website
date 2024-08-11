import React from "react";
import { icons } from "../assets/asset";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#D4AF37] pl-[100px] pt-[60px] pb-[100px] grid grid-cols-[2fr_0.65fr_1.1fr_1.5fr]">
        <div>
          <div className="flex flex-row gap-[15px] items-center">
            <img className="w-[80px] h-[70px]" src={icons.logo} alt="" />
            <h2 className="text-[35px] font-['Playfair+Display'] font-semibold text-white  ">
              Ornate Makeup Studio
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="pt-[20px] text-[22px] font-semibold font-['Raleway'] text-[#4A4745] ">
            PAGES
          </h2>
          <ul className="flex flex-col justify-between text-[20px] gap-[20px] font-semibold font-['Raleway'] ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#4A4745]" : "text-white"
                  } hover:text-[#4A4745]`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#4A4745]" : "text-white"
                  } hover:text-[#4A4745]`
                }
              >
                SERVICES
              </NavLink>
            </li>
            {/* <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#4A4745]"} hover:text-white`
              }
            >
              ABOUT
            </NavLink>
          </li> */}
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#4A4745]" : "text-white"
                  } hover:text-[#4A4745]`
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#4A4745]" : "text-white"
                  } hover:text-[#4A4745]`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="pt-[20px] text-[22px] font-semibold font-['Raleway'] text-[#4A4745] ">
            RESOURCES
          </h2>
          <ul className="flex flex-col justify-between text-[20px] gap-[20px] font-semibold font-['Raleway'] ">
            <li>
              <NavLink
                to="/privacypolicy"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#4A4745]" : "text-white"
                  } hover:text-[#4A4745]`
                }
              >
                PRIVACY POLICY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/termscondition"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#4A4745]" : "text-white"
                  } hover:text-[#4A4745]`
                }
              >
                TERMS & CONDITIONS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="pt-[20px] text-[22px] font-semibold font-['Raleway'] text-[#4A4745] ">
            CONTACT US
          </h2>
          <ul className="flex flex-col justify-between text-[20px] gap-[20px] font-semibold font-['Raleway'] text-white ">
            <li>Address:</li>
            <li>Mobile: <span className="font-normal">(+91)99340 59935</span></li>
          </ul>
        </div>
      </div>
      <div className='bg-[#4A4745] px-[100px] py-[20px] text-white font-semibold font-["Raleway"] '>
        &copy; Ornate Makeup Studio Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
