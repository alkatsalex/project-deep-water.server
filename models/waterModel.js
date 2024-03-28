import mongoose from "mongoose";

const WaterEntrySchema = new mongoose.Schema({
  time: {
    type: Date,
    required: [true, "Time is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
});

const WaterTrackingSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "User ID is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  daily_limit: {
    type: Number,
    required: [true, "Daily limit is required"],
  },
  water_entries: {
    type: [WaterEntrySchema],
    default: [],
  },
});

export default mongoose.model("WaterTracking", WaterTrackingSchema);
