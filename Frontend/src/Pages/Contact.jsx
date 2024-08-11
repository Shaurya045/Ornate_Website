import React, { useState } from "react";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
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
    let response = await fetch("https://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
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
      <div className="bg-white w-[80%] h-[85vh] rounded-[10px] flex flex-row gap-[30px] p-[10px] ">
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
            <div className="flex flex-row gap-[10px]">
              <img src="" alt="" />
              <p>(+91)99340 59935</p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <img src="" alt="" />
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <img src="" alt="" />
              <p>address...</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] rounded-[50%] absolute bottom-[-20px] right-[-60px] bg-[#79641F] "></div>
          <div className="w-[130px] h-[130px] rounded-[50%] absolute bottom-[125px] right-[95px] bg-[#f5ca3e98] "></div>
        </div>
        <div className="ml-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex flex-row gap-[20px] ">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  required
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />

                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row gap-[20px] ">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="email"
                    required
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />

                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone no."
                    required
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
              </div>
              <textarea
                rows="6"
                value={formDetails.message}
                placeholder="Write your Message here..."
                required
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button className=" " type="submit">
                <span>{buttonText}</span>
              </button>
              <div className="text-green-500 text-[20px] mb-[20px] ">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
