const getCurrent = (req, res) => {
  const { user } = res.user;

  const { name, email, avatarURL, gender, daily_limit, _id } = user;

  res.status(200).send({ name, email, avatarURL, gender, daily_limit, _id });
};

export default getCurrent;
