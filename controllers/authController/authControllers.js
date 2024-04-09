import "dotenv/config";
import bcrypt from "bcrypt";
import crypto from "node:crypto";
import gravatar from "gravatar";

import User from "../../models/userModel.js";
import { HttpError } from "../../helpers/index.js";

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
    verify: true,
    verificationToken,
  });

  res.status(201).send({
    message: "Registration successfully, check your email to verify",
  });
};

export default registerUsers;
