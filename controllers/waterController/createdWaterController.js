import WaterTracking from "../../models/waterModel.js";

const createdWaterController = async (req, res) => {
  const { id } = res.user;
  console.log(res.user);
  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();
  console.log(stringDate);
  const water = await WaterTracking.findOne({ date: stringDate, user_id: id });

  if (water !== null) {
    return res.end();
  }
  const newWater = await WaterTracking.create({
    date: stringDate,
    user_id: id,
  });
  res.status(201).send(newWater);
};
export default createdWaterController;
