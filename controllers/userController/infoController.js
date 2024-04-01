import User from '../../models/userModel.js';

const getUserInfo = async (req, res) => {
  const userId = req.params.id;

  const { email, avatarURL, id, gender } = await User.findById(userId);
  const newData = { email, avatarURL, id, gender };
  res.send(newData);
};

export default getUserInfo;
