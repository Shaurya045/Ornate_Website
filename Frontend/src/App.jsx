import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import { FaWhatsapp } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import UserContextProvider from "./Components/Context/UserContextProvider";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <UserContextProvider>
      <ScrollTop />
      <Navbar />
      <div className="z-50 fixed bottom-[7%] right-[8%] flex flex-col gap-[5px]">
        <div className="phone lg:hidden">
          <div className="phone-content">
            <a href="tel: +919199998766">
              <div className="w-[40px] h-[40px] bg-sky-400 rounded-[50%] flex flex-row justify-center items-center text-[25px] text-white ">
                <BiSolidPhoneCall />
              </div>
            </a>
          </div>
        </div>
        <div className="whatsapp">
          <div className="whatsapp-content">
            <a
              href={`https://wa.me/919199998766?text=Hi, I want to know more information for the makeup and its packages `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" w-[40px] h-[40px] bg-green-400 rounded-[50%] flex flex-row justify-center items-center text-[45px] text-white ">
                <FaWhatsapp />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-full">
        <Outlet />
        <Footer />
      </div>
      <Analytics />
    </UserContextProvider>
  );
}

export default App;
