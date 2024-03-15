import * as nodemailer from "nodemailer";
import { Success } from "types/success";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: "pop.denis1902@gmail.com",
  subject: "Send email using Node.js",
  text: "easy",
  html: `
        <h1>Welcome</h1>
        <p>That was easy!</p>
    `,
};

export function sendEmail(): Promise<Error | Success> {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve({ success: true, message: "Email sent: " + info.response });
      }
    });
  });
}
