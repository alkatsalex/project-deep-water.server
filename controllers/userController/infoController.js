import User from '../../models/userModel.js';

const getUserInfo = async (req, res) => {
  const { id } = res.user;

  const { email, avatarURL, gender, daily_limit } = await User.findById(idd);
  const newData = { email, avatarURL, id, gender, daily_limit };
  res.send(newData);
};

export default getUserInfo;
