import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function DropdownNavbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={`${
          dropdown ? "hidden" : ""
        } w-[90%] h-[210px] rounded-[5px] pt-[20px] px-[80px] grid grid-cols-[1.3fr_1fr_1fr_1.3fr] absolute left-[5%] bg-[#efe6dde0]`}
        onClick={() => setDropdown(!dropdown)}
      >
        <li>
          <NavLink
            to="/services"
            className={`text-black font-['Raleway'] font-bold text-[17px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={`text-black font-['Raleway'] font-bold text-[17px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Packages
          </NavLink>
          <ul className="text-[15px] flex flex-col gap-[5px] font-normal pt-[15px] ">
            <li>Bridal Makeup</li>
            <li>Engagement Makeup</li>
            <li>Photoshoot Makeup</li>
            <li>All Packages</li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/services"
            className={`text-black font-['Raleway'] font-bold text-[17px] hover:text-[#D4AF37]`}
            onClick={() => setDropdown(false)}
          >
            Specifics
          </NavLink>
          <ul className="text-[15px] flex flex-col gap-[5px] font-normal pt-[15px] ">
            <li>Skin Makeup</li>
            <li>Hair Makeup</li>
            <li>Styling</li>
            <li>All Specifics</li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/services/training"
            className={`text-black font-['Raleway'] font-bold text-[17px] hover:text-[#D4AF37]`}
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
