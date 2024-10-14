import React, { useState } from "react";
import Button from "./Button";
import { icons } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import DropdownNavbar from "./DropdownNavbar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="relative pt-[30px] px-[150px] max-[1024px]:px-[20px] flex flex-col gap-[20px] z-50">
      <div className=" flex flex-row justify-between items-center ">
        <Link to="/">
          <div className="flex flex-row gap-[20px] items-center ">
            <img
              className="h-[60px] filter drop-shadow-[4px_4px_5px_rgba(0,0,0,0.5)]"
              src={icons.logo}
              loading="lazy"
              alt="Logo"
            />
            <h1 className="text-[30px] font-[600] font-['Playfair+Display'] max-[1024px]:hidden ">
              Ornate Makeup Studio
            </h1>
          </div>
        </Link>
        <div className="flex flex-row gap-[20px] max-[540px]:gap-[3px] items-center ">
          <h3 className="text-[18px] max-[540px]:text-[13px] font-[500] text-white font-['Playfair+Display'] ">
            (+91)99340 59935
          </h3>
          <Link to="/services">
            <button className="bg-yellow-400 w-[150px] h-[40px] rounded-[10px] text-[16px] font-[500] text-white max-[1024px]:hidden ">
              BOOK NOW
            </button>
          </Link>
          <div
            className={`${
              navOpen ? "absolute right-[15px] top-[20px] z-20" : "bg-[#EFE6DD]"
            } min-[1025px]:hidden flex items-center w-[40px] h-[40px] justify-center  rounded-[50%]`}
          >
            <button onClick={() => setNavOpen(!navOpen)} className="text-3xl">
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {navOpen && (
          <ul className="absolute top-0 right-0 pt-[70px] px-[30px] w-[90%] h-[100vh] bg-[#EFE6DD] flex flex-col items-start gap-[10px] text-[22px] font-semibold font-['Raleway'] min-[1025px]:hidden ">
            <li>
              <NavLink
                to="/"
                // className={({ isActive }) =>
                //   `${
                //     isActive ? "text-white" : "text-[#4A4745]"
                //   } hover:text-white`
                // }
                onClick={() => setNavOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li
              onClick={() => setDropdown(!dropdown)}
              className="max-[1025px]:flex max-[1025px]:flex-col "
            >
              SERVICES
              {/* <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-[#4A4745]"
                  } hover:text-white`
                }
              >
                SERVICES
              </NavLink> */}
              {dropdown && (
                <DropdownNavbar navOpen={navOpen} setNavOpen={setNavOpen} />
              )}
            </li>
            <li>
              <NavLink
                to="/portfolio"
                // className={({ isActive }) =>
                //   `${
                //     isActive ? "text-white" : "text-[#4A4745]"
                //   } hover:text-white`
                // }
                onClick={() => setNavOpen(false)}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                // className={({ isActive }) =>
                //   `${
                //     isActive ? "text-white" : "text-[#4A4745]"
                //   } hover:text-white`
                // }
                onClick={() => setNavOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className="mx-[100px]">
        <ul className="flex flex-row justify-between text-[22px] font-semibold font-['Raleway'] max-[1024px]:hidden ">
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
