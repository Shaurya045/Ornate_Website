import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.AUTHUSER,
    pass: process.env.AUTHPASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

export const sendContactEmail = (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  const receiverMail = {
    from: name,
    to: process.env.RECIEVER_EMAIL,
    subject: "More Information for Makeup Packages",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(receiverMail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      return res.status(500).json({success: false, message: "Error sending message", error });
    } else {
      console.log("Email sent:", info.response); // Log success info
      return res.status(200).json({success: true, message: "Message Sent" });
    }
  });
  
};
