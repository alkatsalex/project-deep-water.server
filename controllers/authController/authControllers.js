// НІЧОГО НЕ ЗМІНЮВАТИ
import "dotenv/config";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import bcrypt from "bcrypt";
import crypto from "node:crypto";
import jwt from "jsonwebtoken";

import User from "../../models/userModel.js";

import { userAuth } from "../../schemas/userAuth.js";

const registerUsers = async (req, res, next) => {
  const { email, password } = req.body;

  const normalizedEmail = email.toLowerCase();
  const { _, error } = userAuth.validate({
    email: normalizedEmail,
    password,
  });

  if (typeof error !== "undefined") {
    return res.status(400).json({ message: error.message });
  }

  try {
    const user = await User.findOne({ email: normalizedEmail });

    if (user !== null) {
      return res.status(409).send({ message: "Email in use" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomUUID();

    await User.create({
      email: normalizedEmail,
      password: passwordHash,
      verificationToken,
    });

    res.status(201).send({
      message: "Registration successfully, check your email to verify",
    });
  } catch (error) {
    next(error);
  }
};

export default registerUsers;
