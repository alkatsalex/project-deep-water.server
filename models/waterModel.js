import mongoose from 'mongoose';
import crypto from 'node:crypto';
import { handleMongooseError } from '../helpers/index.js';

const WaterEntrySchema = new mongoose.Schema({
  id: {
    type: String,
    default: crypto.randomUUID(),
  },
  time: {
    type: Date,
    required: [true, 'Time is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
});

const WaterTrackingSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, 'User ID is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  daily_limit: {
    type: Number,
    required: [true, 'Daily limit is required'],
  },
  water_entries: {
    type: [WaterEntrySchema],
    default: [],
  },
});

WaterTrackingSchema.post('save', handleMongooseError);

export default mongoose.model('WaterTracking', WaterTrackingSchema);
