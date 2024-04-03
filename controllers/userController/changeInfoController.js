import bcrypt from 'bcrypt';
import User from '../../models/userModel.js';
import HttpError from '../../helpers/HttpError.js';
import { idSchema } from '../../schemas/waterSchema.js';

const updateInfo = async (req, res, next) => {
  const { id } = res.user;
  const { oldPassword, newPassword, newEmail } = req.body;
  const user = await User.findById(id);
  const { password } = user;
  const oldEmail = user.email;
  let newPasswordHash;

  if (oldPassword && newPassword) {
    if (oldPassword === newPassword) {
      throw HttpError(
        400,
        'The new password must be different from the old one'
      );
    }

    const comparedPassword = await bcrypt.compare(oldPassword, password);

    if (!comparedPassword) {
      throw HttpError(401, 'Current password is incorrect');
    }

    newPasswordHash = await bcrypt.hash(newPassword, 10);
  }

  if (newEmail && newEmail !== oldEmail) {
    const userWithNewEmail = await User.findOne({ email: newEmail });

    if (userWithNewEmail !== null) {
      throw HttpError(409, 'Email is already in use');
    }
    await User.findOneAndUpdate({ email: oldEmail }, { email: newEmail });
  }

  const updatedUserData = { ...req.body };
  if (newPasswordHash) {
    updatedUserData.password = newPasswordHash;
  }

  const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {
    new: true,
  });

  const { name = '', gender, email } = updatedUser;
  res.status(200).json({ email, name, gender });
};

export default updateInfo;
