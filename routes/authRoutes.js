import express from "express";
import {
  registerUsers,
  loginUsers,
  logOut,
  verifyEmail,
  verifyEmailRepeat,
  getCurrent,
} from "../controllers/authController/index.js";
import {
  updateAvatar,
  updateInfo,
  getUserInfo,
  deleteAccount,
} from "../controllers/userController/index.js";
import { auth, validateBody, upload } from "../middleware/index.js";
import { emailSchema, userAuth } from "../schemas/userAuth.js";
import { ctrlWrapper } from "../helpers/index.js";

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
authRouter.post("/logout", auth, ctrlWrapper(logOut));
authRouter.get("/info", auth, ctrlWrapper(getUserInfo));
authRouter.patch(
  "/avatar",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);
authRouter.patch("/info", auth, ctrlWrapper(updateInfo));
authRouter.get("/current", auth, ctrlWrapper(getCurrent));
authRouter.delete("/delete", auth, ctrlWrapper(deleteAccount));

export default authRouter;
