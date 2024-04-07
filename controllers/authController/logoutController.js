import { HttpError } from "../../helpers/index.js";
import User from "../../models/userModel.js";

const logOut = async (req, res) => {
  const { id } = res.user;

  const result = await User.findByIdAndUpdate(id, { token: null });

  if (!result) {
    throw HttpError(401, "Not autorized");
  }

  res.status(204).json({});
};
export default logOut;
