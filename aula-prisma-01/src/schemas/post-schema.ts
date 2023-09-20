import Joi from "joi";
import joiBase from "joi";
import joiDate from "@joi/date";
import { CreatePost } from "../repositories/post-repository";

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createAt: joiBase.extend(joiDate).date().format("YYYY/MM/DD"),
});
