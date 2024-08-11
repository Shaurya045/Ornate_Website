import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import PortfolioHeader from "../Components/PortfolioHeader";

function Portfolio() {
  return (
    <div>
      <PortfolioHeader />
      <div className="bg-[#EFE6DD] pt-[60px] flex flex-col gap-[30px] items-center ">
        <h2 className="text-[30px] font-['Playfair+Display'] font-bold text-[#4A4745] ">
          Creating Timeless Looks for Every Occasion
        </h2>
        <div>
          <ul className="flex flex-row gap-[120px] text-[20px]">
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                      : "text-[#4A4745] hover:text-[#D4AF3D]"
                  } `
                }
              >
                Bridal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/party"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                      : "text-[#4A4745] hover:text-[#D4AF3D]"
                  } `
                }
              >
                Party
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/specialoccasion"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                      : "text-[#4A4745] hover:text-[#D4AF3D]"
                  } `
                }
              >
                Special Occasion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/photoshoot"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                      : "text-[#4A4745] hover:text-[#D4AF3D]"
                  } `
                }
              >
                Photoshoot
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
