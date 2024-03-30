// НІЧОГО НЕ ЗМІНЮВАТИ

import express from "express";
import {
  registerUsers,
  loginUsers,
  logOut,
  verifyEmail,
  verifyEmailRepeat,
} from "../controllers/authController/index.js";
import {
  updateAvatar,
  updateInfo,
  getUserInfo,
} from "../controllers/userController/index.js";
import { auth } from "../middleware/auth.js";
import validateBody from "../middleware/validateBody.js";
import { emailSchema, userAuth } from "../schemas/userAuth.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import upload from "../middleware/upload.js";

// import { verify } from "node:crypto";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userAuth),
  ctrlWrapper(registerUsers)
);
authRouter.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));
authRouter.post(
  "/verify",
  validateBody(emailSchema),
  ctrlWrapper(verifyEmailRepeat)
);
authRouter.post("/login", validateBody(userAuth), ctrlWrapper(loginUsers));
authRouter.get("/logout", auth, ctrlWrapper(logOut));
authRouter.get("/info/:id", auth, getUserInfo);
authRouter.patch("/avatar/:id", auth, upload.single("avatar"), updateAvatar);
authRouter.patch("/edit", auth, updateInfo);

export default authRouter;
