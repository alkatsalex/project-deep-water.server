import User from "../../models/userModel.js";
import { HttpError, sendEmail } from "../../helpers/index.js";

const deleteAccount = async (req, res) => {
  const { id } = res.user;
  const email = req.body;
  const user = await User.findById(id);

  if (user === null) {
    throw HttpError(404, "User not found");
  }

  const confirmDeleteEmail = {
    to: email,
    subject: "Confirm delete",
    html: `
    <h3>We are sad that you want to leave us. If you haven't changed your mind yet, click on the link <a target="_blank" href="https://denys90.github.io/tracker-of-water-frontend"></h3>
      `,
    text: `We are sad that you want to leave us. If you haven't changed your mind yet, click on the link `,
  };
  await sendEmail(confirmDeleteEmail);

  //   const { password } = user;

  //   const comparedPassword = await bcrypt.compare(passwordForVerifi, password);
  //   if (!comparedPassword) {
  //     throw HttpError(401, "Current password is incorrect");
  //   }

  //   const result = await User.findByIdAndDelete(id);
  res.status(200).send("Acc is deleted");
};
export default deleteAccount;
