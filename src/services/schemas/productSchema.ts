import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().min(3).required(),
  price: Joi.number().min(1).required(),
  manufacturingDate: Joi.string().isoDate().required(),
  expirationDate: Joi.string().isoDate().required(),
});

export default productSchema;
