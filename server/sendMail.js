import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const emailOptions = async (options) => {
  let transpoter = nodemailer.createTransport({
    // service: "hotmail", //i use outlook
    // C1 => gmail
    service: "gmail",
    // C2 => gmail
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false, // true for 456, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  await transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// Send email
const emailSender = ({ fullName, email, phone, message }) => {
  const options = {
    from: `ShoeShop 🛍️ <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Message From Shoeshop Store",
    html: `<div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
            <div style="max-width: 700px; background-color: white; margin: 0 auto">
              <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
                <a href="${process.env.CLIENT_URL}"
                  ><img
                    src="https://res.cloudinary.com/zpune/image/upload/v1652256707/random/favicon_hybtfj.png"
                    style="width: 100%; height: 70px; object-fit: contain"
                /></a>
              </div>
              <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                  Form Shoeshop Store
                </p>
                <div style="font-size: 0.8rem; margin: 0 30px">
                  <p>FullName: <b>${fullName}</b></p>
                  <p>Email: <b>${email}</b></p>
                  <p>Phone: <b>${phone}</b></p>
                  <p>Message: <i>${message}</i></p>
                </div>
              </div>
            </div>
      </div>`,
    //Dynamic Template with send grid
    // templateId: "",
    // dynamicTemplateData: {},
    // Send File
    attachments: [
      {
        filename: "test.pdf",
        path: path.join(__dirname, "test.pdf"),
        contentType: "application/pdf",
      },
      {
        filename: "11.jpeg",
        path: path.join(__dirname, "11.jpeg"),
        contentType: ["image/jpeg", "image/jpg"],
      },
    ],
  };

  emailOptions(options);
};

export default emailSender;
