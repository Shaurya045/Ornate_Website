import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import { FaWhatsapp } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <div className="z-20 fixed bottom-[10%] right-[5%] flex flex-col gap-[10px]">
        <a href="tel: +918210080108">
          <div className="w-[60px] h-[60px] bg-sky-400 rounded-[50%] flex flex-row justify-center items-center text-[35px] text-white md:hidden">
            <BiSolidPhoneCall />
          </div>
        </a>
        <a
          href={`https://wa.me/918210080108?text=Hi, I want to know more information for the trip `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-[60px] h-[60px] bg-[#D4AF37] rounded-[50%] flex flex-row justify-center items-center text-[45px] text-white ">
            <FaWhatsapp />
          </div>
        </a>
      </div>
      <div className="absolute top-0 w-full">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
