import WaterTracking from "../../models/waterModel.js";
import User from "../../models/userModel.js";

const changeDailyNorm = async (req, res) => {
  const { id } = res.user;
  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();
  const { daily_limit } = req.body;

  const newDaily_limit = await WaterTracking.findOneAndUpdate(
    { date: stringDate, owner: id },
    { daily_limit },
    { new: true }
  );

  await User.findByIdAndUpdate(id, { daily_limit });

  res.status(201).send({ daily_limit: newDaily_limit.daily_limit });
};
export default changeDailyNorm;
