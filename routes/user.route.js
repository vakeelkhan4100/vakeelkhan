import { signup } from "../controllers/user.controller.js";
import  Express  from "express";
const user = Express.Router();
user.route("/user/signup").post(signup)
export default user
 