import Joi from "joi";

export const idSchema = Joi.object({
  drink_id: Joi.string().length(36),
});

export const drinkSchema = Joi.object({
  date: Joi.string().length(10),
  time: Joi.string().min(4).max(8),
  amount: Joi.number().integer().positive().less(5001),
});

export const dailyNormSchema = Joi.object({
  daily_limit: Joi.number(),
});

export const monthSchema = Joi.object({
  date: Joi.string(),
});
