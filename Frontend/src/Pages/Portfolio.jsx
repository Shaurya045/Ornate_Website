import React, { act, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PortfolioHeader from "../Components/PortfolioHeader";

function Portfolio() {
  const [active, setActive] = useState("Bridal");
  return (
    <div className="bg-[#EFE6DD]">
      <PortfolioHeader />
      <div className=" pt-[60px] flex flex-col gap-[30px] items-center ">
        <h2 className="text-[30px] font-['Playfair+Display'] px-[10px] font-bold text-[#4A4745] text-center max-[768px]:text-[20px] ">
          Creating Timeless Looks for Every Occasion
        </h2>
        <div>
          <ul className="flex flex-row gap-[120px] px-[20px] text-[20px] max-[1024px]:text-[15px] max-[1024px]:gap-[15px] text-cente ">
            <li>
              <NavLink
                to="/portfolio"
                onClick={() => setActive("Bridal")}
                className={({ isActive }) =>
                  `${
                    isActive && active === "Bridal"
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
                onClick={() => setActive("Party")}
                className={({ isActive }) =>
                  `${
                    isActive && active === "Party"
                      ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                      : "text-[#4A4745] hover:text-[#D4AF3D]"
                  } `
                }
              >
                Party
              </NavLink>
            </li>
            <li
              className={`${
                active === "SpecialOccasion"
                  ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                  : "text-[#4A4745] hover:text-[#D4AF3D]"
              }`}
            >
              <NavLink
                to="/portfolio/specialoccasion"
                onClick={() => setActive("SpecialOccasion")}
                // className={({ isActive }) =>
                //   `${
                //     isActive && active === "SpecialOccasion"
                //       ? "text-white bg-[#D4AF3D] px-[25px] py-[5px] rounded-[5px] "
                //       : "text-[#4A4745] hover:text-[#D4AF3D]"
                //   } `
                // }
              >
                Special Occasion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/photoshoot"
                onClick={() => setActive("Photoshoot")}
                className={({ isActive }) =>
                  `${
                    isActive && active === "Photoshoot"
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
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Portfolio;
