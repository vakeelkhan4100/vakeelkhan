import { create } from "../controllers/category.controller.js";
import Express from "express";
const category = Express.Router();
category.route("/category/create").post(create)
export default category