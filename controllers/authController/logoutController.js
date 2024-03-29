import HttpError from "../../helpers/HttpError.js";
import User from "../../models/userModel.js";

const logOut = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, { token: null });

  if (!result) {
    throw HttpError(401, "Not autorized");
  }

  res.status(204).json({});
};
export default logOut;
