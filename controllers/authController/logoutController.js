const logOut = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null });
    res.status.end();
  } catch (error) {
    next(error);
  }
};
export default logOut;
