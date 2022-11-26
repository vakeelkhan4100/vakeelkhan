import { create, getalldata, GetDataByAgrigate } from "../controllers/category.controller.js";
import Express from "express";
const category = Express.Router();
category.route("/category/create").post(create)
category.route("/category/getalldata").get(getalldata)
category.route("/GetDataByAgrigate").get(GetDataByAgrigate)
export default category