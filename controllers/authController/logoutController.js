import User from '../../models/userModel.js';

const logOut = async (req, res, next) => {
  try {
    const { _id } = res.user;
    await User.findByIdAndUpdate(_id, { token: null });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
export default logOut;
