import Joi from "joi";

export const idSchema = Joi.object({
  id: Joi.string().length(24),
});

export const drinkSchema = Joi.object({
  date: Joi.string().length(10),
  time: Joi.string().min(4).max(8),
  amount: Joi.number().integer().positive().less(5001),
});

export const dailyNormSchema = Joi.object({
  daily_limit: Joi.number(),
  date: Joi.string(),
});

export const monthSchema = Joi.object({
  date: Joi.string(),
});
