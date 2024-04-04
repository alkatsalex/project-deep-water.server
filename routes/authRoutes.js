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
import { auth, validateBody, upload } from "../middleware/index.js";
import { emailSchema, userAuth } from "../schemas/userAuth.js";
import { ctrlWrapper } from "../helpers/index.js";

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
authRouter.get("/info", auth, ctrlWrapper(getUserInfo));
authRouter.patch(
  "/avatar",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);
authRouter.patch("/info", auth, ctrlWrapper(updateInfo));

export default authRouter;
