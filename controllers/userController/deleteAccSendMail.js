import User from "../../models/userModel.js";

import { HttpError, sendEmail } from "../../helpers/index.js";

import crypto from "node:crypto";

const deleteAccSendMail = async (req, res) => {
  const { email } = req.query;
  const generateDeleteToken = crypto.randomUUID();

  let user = await User.findOne({ email });
  user.generateDeleteToken = generateDeleteToken;
  await user.save();

  const confirmDeleteEmail = {
    to: email,
    subject: "Confirm delete",
    html: `
      <h3>We are sad that you want to leave us. If you haven't changed your mind yet, click on the link <a target="_blank" href="https://denys90.github.io/tracker-of-water-frontend/delete/${generateDeleteToken}">Click here</a></h3>
        `,
    text: `We are sad that you want to leave us. If you haven't changed your mind yet, click on the link href="https://denys90.github.io/tracker-of-water-frontend/delete/${generateDeleteToken}"`,
  };

  await sendEmail(confirmDeleteEmail);

  res
    .status(200)
    .send({ message: "Check your email to confirm", generateDeleteToken });
};
export default deleteAccSendMail;
