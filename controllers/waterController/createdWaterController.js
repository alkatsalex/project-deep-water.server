import WaterTracking from "../../models/waterModel.js";

const createdWaterController = async (req, res) => {
  const { id } = res.user;
  console.log(res.user);
  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();
  console.log(stringDate);
  const water = await WaterTracking.findOne({ date: stringDate });

  if (water !== null) {
    return res.send("today is heve water");
  }
  const newWater = await WaterTracking.create({
    date: stringDate,
    user_id: id,
  });
  res.send(newWater);
};
export default createdWaterController;
