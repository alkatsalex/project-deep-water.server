// НІЧОГО НЕ ЗМІНЮВАТИ

import express from 'express';
import registerUsers from '../controllers/authController/authControllers.js';
import loginUsers from '../controllers/authController/loginController.js';
import logOut from '../controllers/authController/logoutController.js';
import verifyEmail from "../controllers/authController/verifyEmail.js";
import getUserInfo from '../controllers/userController/infoController.js';
import updateAvatar from '../controllers/userController/avatarController.js';
import updateInfo from '../controllers/userController/changeInfoController.js';
import { auth } from '../middleware/auth.js';
import validateBody from '../middleware/validateBody.js';
import { emailSchema, userAuth } from "../schemas/userAuth.js";
import ctrlWrapper from '../helpers/ctrlWrapper.js';
import upload from '../middleware/upload.js';

// import { verify } from "node:crypto";

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateBody(userAuth),
  ctrlWrapper(registerUsers)
);
authRouter.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));
authRouter.post("/verify", validateBody(emailSchema), ctrlWrapper());
authRouter.post("/login", validateBody(userAuth), ctrlWrapper(loginUsers));
authRouter.get("/logout", auth, ctrlWrapper(logOut));
authRouter.get('/info/:id', auth, getUserInfo);
authRouter.patch('/avatar/:id', auth, upload.single('avatar'), updateAvatar);
authRouter.patch('/edit', auth, updateInfo);

export default authRouter;
