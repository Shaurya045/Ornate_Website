import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function DropdownNavbar({ navOpen, setNavOpen }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={`${
          dropdown ? "hidden" : ""
        } px-[15px] min-[1025px]:w-[90%] min-[1025px]:h-[210px] min-[1025px]:rounded-[5px] min-[1025px]:pt-[20px] min-[1025px]:px-[80px] grid min-[1025px]:grid-cols-[1.3fr_1fr_1fr_1.3fr] min-[1025px]:absolute min-[1025px]:left-[5%] min-[1025px]:bg-[#efe6dde0]`}
        onClick={() => {
          setDropdown(!dropdown);
          setNavOpen(false);
        }}
      >
        <li>
          <NavLink
            to="/services"
            className={`text-black font-['Raleway'] font-bold text-[17px] max-[1025px]:text-[15px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={`text-black font-['Raleway'] font-bold text-[17px] max-[1025px]:text-[15px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Packages
          </NavLink>
          <ul className="text-[15px] flex flex-col gap-[5px] font-normal pt-[15px] max-[1025px]:text-[13px] max-[1025px]:px-[10px] ">
            <li>Bridal Makeup</li>
            <li>Engagement Makeup</li>
            <li>Photoshoot Makeup</li>
            <li>All Packages</li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/services"
            className={`text-black font-['Raleway'] font-bold text-[17px] max-[1025px]:text-[15px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Specifics
          </NavLink>
          <ul className="text-[15px] flex flex-col gap-[5px] font-normal pt-[15px] max-[1025px]:text-[13px] max-[1025px]:px-[10px] ">
            <li>Skin Makeup</li>
            <li>Hair Makeup</li>
            <li>Styling</li>
            <li>All Specifics</li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/services/training"
            className={`text-black font-['Raleway'] font-bold text-[17px] max-[1025px]:text-[15px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Cosmetology Training Services
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default DropdownNavbar;
