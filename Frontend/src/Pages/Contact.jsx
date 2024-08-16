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
    let response = await fetch("http://localhost:3000/contact", {
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
        <p className='text-[16px] font-["Raleway"] font-normal '>
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className=" bg-white w-[80%] h-[630px] rounded-[10px] flex flex-row gap-[30px] p-[10px] ">
        <div className="bg-[#D4AF37] w-[37%] rounded-s-[10px] relative overflow-hidden p-[40px] flex flex-col gap-[100px] ">
          <div className="flex flex-col text-white gap-[5px] ">
            <h2 className="font-['Raleway'] text-[25px] font-bold ">
              Contact Information
            </h2>
            <p className="font-['Raleway'] text-[16px] font-normal ">
              Say something to and hear back
            </p>
          </div>
          <div className="flex flex-col gap-[40px] text-white">
            <div className="flex flex-row gap-[10px] items-center">
              <BiSolidPhoneCall />
              <p>(+91)99340 59935</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <IoMdMail />
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <MdLocationOn />
              <p>address...</p>
            </div>
          </div>
          <div className="mt-[90px] flex flex-row gap-[20px]">
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
          <div className="w-[250px] h-[250px] rounded-[50%] absolute bottom-[-20px] right-[-60px] bg-[#79641F] "></div>
          <div className="w-[130px] h-[130px] rounded-[50%] absolute bottom-[125px] right-[95px] bg-[#f5ca3e98] "></div>
        </div>
        <div className="w-[61%] py-[50px] px-[50px] relative ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[60px] ">
              <div className="flex flex-row gap-[40px] w-full ">
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
                <div className="flex flex-row gap-[40px] w-full ">
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
          <div className="absolute bottom-[-20px] right-[110px] w-[250px] z-[0] ">
            <img className="w-[250px]" src={icons.contact1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
