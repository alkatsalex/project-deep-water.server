import "dotenv/config";
import nodemailer from "nodemailer";

const { GOOGLE_SEND_PASSWORD, GOOGLE_SEND_USER } = process.env;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: GOOGLE_SEND_USER,
    pass: GOOGLE_SEND_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const email = { ...data, from: GOOGLE_SEND_USER };
  await transport.sendMail(email);
};

export default sendEmail;
