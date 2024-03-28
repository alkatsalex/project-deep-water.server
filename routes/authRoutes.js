// НІЧОГО НЕ ЗМІНЮВАТИ
import express from 'express';
import { registerUsers, loginUsers } from '../controllers/authControllers.js';
import logOut from '../controllers/logoutController.js';
import { auth } from '../middleware/auth.js';
// import upload from "../middleware/upload.js";
// import { verify } from "node:crypto";

const authRouter = express.Router();

authRouter.post('/register', registerUsers);
authRouter.post('/login', loginUsers);
authRouter.get('/logout', auth, logOut);

export default authRouter;
