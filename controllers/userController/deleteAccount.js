import User from "../../models/userModel.js";
import WaterTracking from "../../models/waterModel.js";
import { HttpError, sendEmail } from "../../helpers/index.js";
import { deleteImgFromCloudinary } from "../../helpers/deleteAvatar.js";
const deleteAccount = async (req, res) => {
  const { id } = res.user;
  const { email } = req.query;

  const user = await User.findById(id);

  if (user === null) {
    throw HttpError(404, "User not found");
  }
  await WaterTracking.deleteMany({ owner: id });
  if (user.avatarURL) {
    await deleteImgFromCloudinary(user.avatarURL);
  }

  const confirmDeleteEmail = {
    to: email,
    subject: "Confirm delete",
    html: `
      <h3>We are sad that you want to leave us. If you haven't changed your mind yet, click on the link <a target="_blank" href="https://denys90.github.io/tracker-of-water-frontend">Click here</a></h3>
        `,
    text: `We are sad that you want to leave us. If you haven't changed your mind yet, click on the link href="https://denys90.github.io/tracker-of-water-frontend"`,
  };
  await sendEmail(confirmDeleteEmail);

  const result = await User.findByIdAndDelete(id);
  res.status(200).send("Account is deleted");
};
export default deleteAccount;
