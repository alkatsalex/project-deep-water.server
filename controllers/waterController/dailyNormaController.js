import WaterTracking from "../../models/waterModel.js";
import User from "../../models/userModel.js";
import HttpError from "../../helpers/HttpError.js";

const changeDailyNorm = async (req, res) => {
  const { id } = res.user;

  const { daily_limit, date } = req.body;

  if (daily_limit === null) {
    throw HttpError(400, "The body must contain a new daily limit");
  }

  const newDaily_limit = await WaterTracking.findOneAndUpdate(
    { date, owner: id },
    { daily_limit },
    { new: true }
  );

  await User.findByIdAndUpdate(id, { daily_limit });

  res.status(201).send({ daily_limit: newDaily_limit.daily_limit });
};
export default changeDailyNorm;
