const getCurrent = (req, res) => {
  const { user } = res.user;

  res.status(200).send(user);
};

export default getCurrent;
