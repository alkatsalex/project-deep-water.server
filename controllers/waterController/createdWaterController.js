import WaterTracking from "../../models/waterModel.js";
import User from "../../models/userModel.js";

const createdWaterController = async (req, res) => {
  const { id } = res.user;

  const { date } = req.body;

  // const currentData = Date.now();
  // const date = new Date(currentData);
  // const stringDate = date.toLocaleDateString();
  console.log(date);
  if (!date) {
    return res.status(409).send("BAD REQ");
  }
  console.log("oops");
  const { daily_limit } = await User.findById(id);
  const water = await WaterTracking.findOne({ date: date, owner: id });

  if (water !== null) {
    const count = water.water_entries.length;
    const totalAmount = water.water_entries.reduce(
      (acc, entry) => acc + entry.amount,
      0
    );
    const percentage = (totalAmount / water.daily_limit) * 100;
    water.count = count;
    water.percent = percentage;

    return res.status(200).send(water);
  }

  const newWater = await WaterTracking.create({
    date: date,
    owner: id,
    daily_limit,
  });
  res.status(201).send(newWater);
};
export default createdWaterController;
