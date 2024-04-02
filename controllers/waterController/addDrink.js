import WaterTracking from "../../models/waterModel.js";

const addDrink = async (req, res) => {
  const { id: owner } = res.user;
  const { time, amount } = req.body;

  const findDrink = await WaterTracking.findOne({ owner });

  const t = findDrink.water_entries.push([time, amount]);
  console.log(t);

  //   const result = water_entries.push({ time, amount });
};

export default addDrink;
