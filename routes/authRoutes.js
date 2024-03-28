// НІЧОГО НЕ ЗМІНЮВАТИ
import express from "express";
import { registerUsers } from "../controllers/authControllers.js";
// import { auth } from "../middleware/auth.js";
// import upload from "../middleware/upload.js";
// import { verify } from "node:crypto";

const authRouter = express.Router();

authRouter.post("/register", registerUsers);

export default authRouter;
