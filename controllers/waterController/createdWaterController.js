import WaterTracking from "../../models/waterModel.js";
import User from "../../models/userModel.js";

const createdWaterController = async (req, res) => {
  const { id } = res.user;

  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();

  const { daily_limit } = await User.findById(id);
  const water = await WaterTracking.findOne({ date: stringDate, owner: id });

  if (water !== null) {
    return res.end();
  }

  const newWater = await WaterTracking.create({
    date: stringDate,
    owner: id,
    daily_limit,
  });
  res.status(201).send(newWater);
};
export default createdWaterController;
