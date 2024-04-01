// НІЧОГО НЕ ЗМІНЮВАТИ
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../models/userModel.js";
import { HttpError } from "../../helpers/index.js";

const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  const normalizedEmail = email.toLowerCase();

  const user = await User.findOne({ email: normalizedEmail });

  if (user === null) {
    throw HttpError(401, "Email or password is wrong");
  }

  if (user.verify === false) {
    res.status(401).send({ message: "Your account is not verify" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect === false) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });
  const resUser = {
    token,
    user: {
      email,
    },
  };
  res.status(200).send(resUser);
};

export default loginUsers;
