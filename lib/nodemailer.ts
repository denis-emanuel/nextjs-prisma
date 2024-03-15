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

export function emailOptionsForAdmin(
  email: string,
  name: string,
  phone: string,
  message: string
): nodemailer.SendMailOptions {
  return {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_USERNAME,
    subject: `Mesaj nou pe platforma de la ${name}`,
    replyTo: email,
    html: `
      <h2>Mesaj nou pe platforma de la ${name}</h2>
      <p>Mesaj:</p>
      <q><i>${message}</i></q>
      <br/>
      <hr/>
      <p>Numar de telefon: <i>${phone}</i></p>
      <p>Email: <i><a href="mailto:${email}">${email}</a></i></p>
    `,
  };
}

export function emailOptionsForUser(
  email: string,
  name: string
): nodemailer.SendMailOptions {
  return {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: `Salut, ${name}`,
    html: `
      <h1>Salut, ${name}</h1>
      <p>Multumim pentru mesajul tau. Vom reveni cu un raspuns in cel mai scurt timp posibil.</p>
      <p>O zi frumoasa!</p>
    `,
  };
}

export function sendEmail(
  mailOptions: nodemailer.SendMailOptions
): Promise<Error | Success> {
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
