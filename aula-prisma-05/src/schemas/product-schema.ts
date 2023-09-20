import Joi from "joi";
import { CreateProduct } from "repositories/product-repository";

export const productSchema = Joi.object<CreateProduct>({
  label: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  expirationDate: Joi.date().required(),
  eatable: Joi.boolean().optional(),
});
