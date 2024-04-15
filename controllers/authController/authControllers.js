import "dotenv/config";
import bcrypt from "bcrypt";
import crypto from "node:crypto";
import gravatar from "gravatar";

import User from "../../models/userModel.js";
import { HttpError, sendEmail } from "../../helpers/index.js";

const registerUsers = async (req, res) => {
  const { email, password } = req.body;
  const normalizedEmail = email.toLowerCase();

  const user = await User.findOne({ email: normalizedEmail });

  if (user !== null) {
    throw HttpError(409, "Email in use");
  }

  const avatarURL = gravatar.url(email);
  const passwordHash = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomUUID();

  await User.create({
    name: normalizedEmail.split("@")[0],
    email: normalizedEmail,
    password: passwordHash,
    avatarURL,
    verify: false,
    verificationToken,
  });

  const verificationEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="https://denys90.github.io/tracker-of-water-frontend/verify/${verificationToken}"> Click to verify </a>`,
    text: `To confirm you registration please open the link href="https://denys90.github.io/tracker-of-water-frontend/verify/${verificationToken}"`,
  };
  await sendEmail(verificationEmail);

  res.status(201).send({
    message: "Registration successfully, check your email to verify",
    verificationToken,
  });
};

export default registerUsers;
