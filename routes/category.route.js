import { create, getalldata } from "../controllers/category.controller.js";
import Express from "express";
const category = Express.Router();
category.route("/category/create").post(create)
category.route("/category/getalldata").get(getalldata)
export default category