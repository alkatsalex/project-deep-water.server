import User from "../../models/userModel.js";
import { deleteImgFromCloudinary } from "../../helpers/deleteAvatar.js";
import WaterTracking from "../../models/waterModel.js";

const deleteAccount = async (req, res) => {
  const { generateDeleteToken } = req.params;

  console.log(req.params);

  try {
    const deletedUser = await User.findOneAndDelete({ generateDeleteToken });
    if (!deletedUser) {
      return res.status(404).send("User not found or token invalid");
    }

    await WaterTracking.deleteMany({ owner: deletedUser._id });
    if (deletedUser.avatarURL) {
      await deleteImgFromCloudinary(deletedUser.avatarURL);
    }
    res.send("Account deleted successfully");
  } catch (error) {
    console.error(error);
  }
};

export default deleteAccount;
