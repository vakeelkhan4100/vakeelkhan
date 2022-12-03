import Express from "express";
import { create, get_data, remove } from "../controllers/share.controller.js";
const share = Express.Router();
share.route("/share/create").post(create)
share.route("/share/getdata").get(get_data)
share.route("/share/delete").post(remove)
export default share