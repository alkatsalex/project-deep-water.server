// НІЧОГО НЕ ЗМІНЮВАТИ
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: null,
  },
});

export default mongoose.model("User", UserSchema);
