import User from '../../models/userModel.js';

const getUserInfo = async (req, res) => {
  const userId = req.params.id;
  try {
    const { email, avatarURL, id } = await User.findById(userId);
    const newData = { email, avatarURL, id };
    res.send(newData);
  } catch (error) {
    console.error('Error getting info:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
export default getUserInfo;
