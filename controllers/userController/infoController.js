import User from "../../models/userModel.js";

const getUserInfo = async (req, res) => {
  const { id } = res.user;

  const { email, avatarURL, gender, daily_limit, name } = await User.findById(
    id
  );
  const newData = { email, avatarURL, id, gender, daily_limit, name };
  res.send(newData);
};

export default getUserInfo;
