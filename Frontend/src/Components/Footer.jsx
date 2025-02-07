import { icons } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#D4AF37] pl-[100px] max-[1300px]:pl-[70px] max-[580px]:pl-[20px] pt-[60px] pb-[100px] max-[1023px]:pb-[60px] max-[1023px]:gap-[5px] grid lg:grid-cols-[2.1fr_0.6fr_1.1fr_1.5fr]">
        <div>
          <Link to="/">
            <div className="flex flex-row gap-[10px] max-[580px]:gap-[5px] items-center">
              <img
                className="w-[80px] h-[70px] max-[1251px]:w-[60px] max-[1251px]:h-[60px] max-[1023px]:w-[70px] "
                src={icons.logo}
                loading="lazy"
                alt=""
              />
              <h2 className="text-[35px] max-[1251px]:text-[32px] max-[1070px]:text-[30px] max-[1023px]:text-[35px] max-[580px]:text-[30px] max-[580px]:leading-[40px] font-['Playfair+Display'] font-semibold text-white  ">
                Ornate Makeup Studio
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] max-[1023px]:px-[15px] ">
          <h2 className="pt-[20px] text-[22px] max-[1251px]:text-[20px] max-[1023px]:text-[21px] font-semibold font-['Raleway'] text-[#4A4745] ">
            PAGES
          </h2>
          <ul className="flex flex-col justify-between text-[20px] max-[1251px]:text-[18px] gap-[16px] max-[1023px]:gap-[13px] font-semibold font-['Raleway'] ">
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
        <div className="flex flex-col gap-[20px] max-[1023px]:px-[15px]">
          <h2 className="pt-[20px] text-[22px] max-[1251px]:text-[20px] max-[1023px]:text-[21px] font-semibold font-['Raleway'] text-[#4A4745] ">
            RESOURCES
          </h2>
          <ul className="flex flex-col justify-between text-[20px] max-[1251px]:text-[18px] gap-[16px] max-[1023px]:gap-[13px] font-semibold font-['Raleway'] ">
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
                to="/termsconditions"
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
        <div className="flex flex-col gap-[20px] max-[1023px]:px-[15px]">
          <h2 className="pt-[20px] text-[22px] max-[1251px]:text-[20px] max-[1023px]:text-[21px] font-semibold font-['Raleway'] text-[#4A4745] ">
            CONTACT US
          </h2>
          <ul className="flex flex-col justify-between text-[20px] max-[1251px]:text-[18px] gap-[16px] max-[1023px]:gap-[13px] font-semibold font-['Raleway'] text-white ">
            <li>
              Address:{" "}
              <span className="font-normal">
                House No.-4E/9, North S.K.Puri, Patliputra, Patna, Bihar
              </span>
            </li>
            <li>
              Mobile: <span className="font-normal">(+91)99340 59935</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row max-[728px]:flex-col max-[728px]:gap-[10px] max-[728px]:items-start items-center justify-between bg-[#4A4745] px-[100px] max-[1300px]:px-[85px] max-[580px]:px-[30px] py-[20px] ">
        <div className='text-white font-semibold font-["Raleway"] '>
          &copy; Ornate Makeup Studio Pvt. Ltd. All Rights Reserved.
        </div>
        <div className="flex flex-row gap-[20px] mt-auto ">
          <Link
            to="https://www.instagram.com/ornate_makeupartist/"
            target="blank"
          >
            <div className="w-[25px] h-[25px] rounded-[50%] bg-black text-white flex items-center justify-center ">
              <FaInstagram />
            </div>
          </Link>
          <Link to="https://www.youtube.com/@OrnatemakeupStudio" target="blank">
            <div className="w-[25px] h-[25px] rounded-[50%] bg-white text-black flex items-center justify-center ">
              <FaYoutube />
            </div>
          </Link>
          <a
            href={`https://wa.me/919934059935?text=Hi, I want to know more information for the makeup and its packages `}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[25px] h-[25px] rounded-[50%] bg-black text-white flex items-center justify-center ">
              <FaWhatsapp />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
