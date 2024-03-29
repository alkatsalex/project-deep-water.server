// НІЧОГО НЕ ЗМІНЮВАТИ
import "dotenv/config";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import bcrypt from "bcrypt";
import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import gravatar from "gravatar";

import User from "../../models/userModel.js";

import HttpError from "../../helpers/HttpError.js";
import sendEmail from "../../helpers/sendEmail.js";

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
    email: normalizedEmail,
    password: passwordHash,
    avatarURL,
    verificationToken,
  });

  const verificationEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}"> Click to verify </a>`,
    text: `To confirm you registration please open the link href="http://localhost:3000/api/users/verify/${verificationToken}`,
  };
  await sendEmail(verificationEmail);

  res.status(201).send({
    // message: "Registration successfully",
    message: "Registration successfully, check your email to verify",
  });
};

export default registerUsers;
