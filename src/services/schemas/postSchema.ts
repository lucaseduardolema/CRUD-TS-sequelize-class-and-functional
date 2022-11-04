import Joi from "joi";

const postSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
});

export default postSchema;
