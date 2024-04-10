import { HttpError, sendEmail } from "../../helpers/index.js";
import User from "../../models/userModel.js";

const verifyEmailRepeat = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(400, "Missing required field email");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verificationEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="https://denys90.github.io/runners_of_code__frontend/verify/${verificationToken}"> Click to verify </a>`,
    text: `To confirm you registration please open the link href="https://denys90.github.io/runners_of_code__frontend/verify/${verificationToken}"`,
  };

  await sendEmail(verificationEmail);

  res.status(200).json({ message: "Verification email sent" });
};

export default verifyEmailRepeat;
