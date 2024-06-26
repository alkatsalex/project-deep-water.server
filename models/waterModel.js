import mongoose, { Schema } from "mongoose";
import { handleMongooseError } from "../helpers/index.js";

const WaterEntrySchema = new mongoose.Schema({
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
    default: 0,
  },
});

const WaterTrackingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  daily_limit: {
    type: Number,
    required: [true, "Daily limit is required"],
    default: 2000,
  },
  water_entries: {
    type: [WaterEntrySchema],
    default: [],
  },
  count: {
    type: Number,
    default: 0,
  },
  percent: {
    type: Number,
    default: 0,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

WaterTrackingSchema.post("save", handleMongooseError);

export default mongoose.model("WaterTracking", WaterTrackingSchema);
