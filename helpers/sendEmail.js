import "dotenv/config";
import nodemailer from "nodemailer";

const { MAILTRAP_USER, MAILTRAP_RASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_RASSWORD,
  },
});

const sendEmail = async (data) => {
  const email = { ...data, from: MAILTRAP_USER };
  await transport.sendMail(email);
};

export default sendEmail;
