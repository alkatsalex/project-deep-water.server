// НІЧОГО НЕ ЗМІНЮВАТИ
import mongoose from "mongoose";
import { handleMongooseError } from "../helpers/index.js";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 64,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegex,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    gender: {
      type: String,
      enum: ["Woman", "Man"],
      default: "Woman",
    },
  },
  { versionKey: false, timestamps: true }
);

UserSchema.post("save", handleMongooseError);

export default mongoose.model("User", UserSchema);
