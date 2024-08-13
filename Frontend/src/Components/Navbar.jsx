import React, { useState } from "react";
import Button from "./Button";
import { icons } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import DropdownNavbar from "./DropdownNavbar";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="relative mt-[30px] mx-[150px] flex flex-col gap-[20px] z-50">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-[20px] items-center ">
          <img className="h-[60px]" src={icons.logo} alt="Logo" />
          <h1 className="text-[30px] font-[600] font-['Playfair+Display'] ">
            Ornate Makeup Studio
          </h1>
        </div>
        <div className="flex flex-row gap-[20px] items-center ">
          <h3 className="text-[18px] font-[500] text-white font-['Playfair+Display'] ">
            (+91)99340 59935
          </h3>
          <Button />
        </div>
      </div>
      <div className="mx-[100px]">
        <ul className="flex flex-row justify-between text-[22px] font-semibold font-['Raleway'] ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#4A4745]"} hover:text-white`
              }
            >
              HOME
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#4A4745]"} hover:text-white`
              }
            >
              SERVICES
            </NavLink>
            {dropdown && <DropdownNavbar />}
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#4A4745]"} hover:text-white`
              }
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#4A4745]"} hover:text-white`
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
