import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { icons } from "../assets/asset";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://ornate-website.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send Message");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully!!" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div className="bg-[#EFE6DD] pt-[200px] pb-[180px] flex flex-col gap-[60px] items-center ">
      <div className="flex- flex-col text-center ">
        <h1 className='text-[35px] font-["Raleway"] font-bold '>Contact Us</h1>
        <p className='text-[16px] px-[10px] font-["Raleway"] font-normal '>
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className=" bg-white w-[80%] max-[1100px]:w-[85%] max-[540px]:w-[90%] h-[630px] max-[980px]:h-[1100px] max-[540px]:h-[1240px] rounded-[10px] flex flex-row max-[980px]:flex-col gap-[20px] p-[10px] ">
        <div className="bg-[#D4AF37] w-[38%] max-[980px]:h-[470px] max-[540px]:h-[440px] max-[980px]:w-full min-[981px]:rounded-s-[10px] max-[980px]:rounded-t-[10px] relative overflow-hidden p-[40px] max-[540px]:p-[20px] flex flex-col gap-[100px] max-[1028px]:gap-[80px] max-[540px]:gap-[70px] ">
          <div className="flex flex-col text-white gap-[5px] ">
            <h2 className="font-['Raleway'] text-[25px] max-[540px]:text-[22px] font-bold ">
              Contact Information
            </h2>
            <p className="font-['Raleway'] text-[16px] max-[540px]:text-[15px] font-normal ">
              Say something to and hear back
            </p>
          </div>
          <div className="flex flex-col gap-[40px] max-[540px]:gap-[25px] text-white">
            <div className="flex flex-row gap-[10px] items-center max-[540px]:text-[14px] ">
              <BiSolidPhoneCall />
              <p>(+91)99340 59935</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center max-[540px]:text-[14px] ">
              <IoMdMail />
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center max-[540px]:text-[14px] ">
              <MdLocationOn />
              <p>address...</p>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] mt-auto ">
            <div className="w-[25px] h-[25px] rounded-[50%] bg-black text-white flex items-center justify-center ">
              <FaInstagram />
            </div>
            <div className="w-[25px] h-[25px] rounded-[50%] bg-white text-black flex items-center justify-center ">
              <FaYoutube />
            </div>
            <div className="w-[25px] h-[25px] rounded-[50%] bg-black text-white flex items-center justify-center ">
              <FaWhatsapp />
            </div>
          </div>
          <div className="w-[250px] max-[1150px]:w-[230px] max-[540px]:w-[180px] h-[250px] max-[1150px]:h-[230px] max-[540px]:h-[180px] rounded-[50%] absolute bottom-[-20px] max-[1150px]:bottom-[-30px] max-[540px]:bottom-[-35px] right-[-60px] max-[1150px]:right-[-70px] max-[540px]:right-[-65px] bg-[#79641F] "></div>
          <div className="w-[130px] max-[1150px]:w-[110px] max-[540px]:w-[80px] h-[130px] max-[1150px]:h-[110px] max-[540px]:h-[80px] rounded-[50%] absolute bottom-[125px] max-[1150px]:bottom-[115px] max-[540px]:bottom-[80px] right-[95px] max-[1150px]:right-[75px] max-[540px]:right-[55px] bg-[#f5ca3e98] "></div>
        </div>
        <div className="w-[61%] max-[980px]:w-full py-[50px] max-[540px]:pb-0 px-[50px] max-[540px]:px-[15px] relative ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[60px] ">
              <div className="flex flex-row gap-[40px] max-[540px]:flex-col max-[540px]:gap-[60px] w-full ">
                <div className="relative w-full">
                  <label className="absolute top-[-20px] left-0 text-gray-500 text-sm">
                    First Name
                  </label>
                  <input
                    className="w-full text-[15px]  block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500 "
                    type="text"
                    value={formDetails.firstName}
                    placeholder=""
                    required
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </div>
                <div className="relative w-full">
                  <label className="absolute top-[-20px] left-0 text-gray-500 text-sm">
                    Last Name
                  </label>
                  <input
                    className="w-full text-[15px]  block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
                    type="text"
                    value={formDetails.lastName}
                    placeholder=""
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row gap-[40px] max-[540px]:flex-col max-[540px]:gap-[60px] w-full ">
                  <div className="relative w-full">
                    <label className="absolute top-[-20px] left-0 text-gray-500 text-sm">
                      Email
                    </label>
                    <input
                      className="w-full text-[15px] block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
                      type="email"
                      value={formDetails.email}
                      placeholder=""
                      required
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </div>

                  <div className="relative w-full">
                    <label className="absolute top-[-20px] left-0 text-gray-500 text-sm">
                      Phone no.
                    </label>
                    <input
                      className="w-full text-[15px]  block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
                      type="tel"
                      value={formDetails.phone}
                      placeholder=""
                      required
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <label className="absolute top-[-30px] left-0 text-gray-500 text-sm">
                  Message
                </label>
                <textarea
                  className="w-full text-[15px] block bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500"
                  rows="6"
                  value={formDetails.message}
                  placeholder="Write your Message here..."
                  required
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
              </div>
              <div className="self-end z-30">
                <button
                  className="w-[200px] h-[50px] bg-[#D4AF37] rounded-[5px] text-white font-semibold  "
                  type="submit"
                >
                  <span>{buttonText}</span>
                </button>
              </div>

              <div className="text-green-500 text-[20px] mb-[20px] z-30 ">
                {status.message && (
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </form>
          <div className="absolute bottom-[-20px] right-[110px] w-[250px] z-[0] max-[980px]:hidden ">
            <img
              className="w-[250px]"
              src={icons.contact1}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] max-[1100px]:w-[85%] max-[540px]:w-[90%] rounded-[10px] overflow-hidden shadow-black shadow-[0px_30px_60px_-20px_rgba(0,0,0,0.37)] ">
        <iframe
          className="border-[#D4AF37] border-[4px] rounded-[10px] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.3922964033579!2d85.11031986956493!3d25.61922819859013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5828cdde6b15%3A0xb7fae52c62b2a2b2!2sAnmol&#39;s%20Chandra%20Regency!5e0!3m2!1sen!2sin!4v1725653798250!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
