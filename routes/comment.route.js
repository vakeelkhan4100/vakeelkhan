import  Express from "express";
import { create, getdata,deleted} from "../controllers/comment.controller.js";
const comment = Express.Router();
comment.route("/comment/create").post(create)
comment.route("/comment/get").get(getdata)
comment.route("/comment/delete").post(deleted)
export default comment